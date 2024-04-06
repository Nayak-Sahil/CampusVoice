"use client"
import React, { use, useState } from "react";
import QueryContext from "./QueryContext";
import { useSession } from "next-auth/react";
import { cloudinaryUpload } from "@/lib/cloudinaryUpload";

export const QueryState = (props) => {
  /**
   * ? (currentformState == "WRITE") 
   * ? (currentformState == "READ_DESTINATION") 
   * ? (currentformState == "MASK_IDENTITY")
   * ? (currentformState == "SEND")
   */
  const [queryData, setQueryData] = useState({ FormState: "WRITE" });
  const [domains, setDomains] = useState({});
  const [subDomains, setSubDomains] = useState(null);
  const [issueTypes, setIssueTypes] = useState(null);
  const [resolvers, setResolvers] = useState([]);
  const session = useSession();

  //while generating queryr
  const queryTicket = {
    queryDomain: null,
    querySubDomain: null,
    queryIssueType: null,
    status: "ON_DOMAIN"
  }

  const [ticket, setTicket] = useState(queryTicket);



  const getDomains = async () => {

    //if domains is already fetched
    if (domains.departmentDomain && domains.otherDomains) return;

    //fetch domains from the server
    const res = await fetch("/api/query/category-details?category=domains", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    })

    let data = await res.json();
    if (!data || data.error) {
      return data.error;
    }

    //get department domain seperate from data
    const departmentDomain = data.filter((domain) => domain.domain_id < 55);
    const otherDomains = data.filter((domain) => domain.domain_id > 54);
    data = {
      departmentDomain,
      otherDomains
    }
    setDomains(data);
    console.log(data);
  }

  const getSubDomains = async (domain_id) => {
    console.log(subDomains);

    const res = await fetch(`/api/query/category-details?category=subdomains&domain_id=${domain_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    })

    let data = await res.json();
    if (!data || data.error) {
      return data.error;
    }
    console.log(data);
    setSubDomains(data);
  }

  //get issue types
  const getIssueTypes = async (subdomain_id) => {
    //get issues from subdomain
    const issueTypes = subDomains.find((subdomain) => subdomain.subdomain_id === subdomain_id).issues;
    setIssueTypes(issueTypes);
  }


  //insert query into the database
  const insertQueryData = async () => {
    //if session is not present throw error
    if(!session) return;

    //upload images to cloudinary
    const images = [];
    if (queryData.QueryDataImages) {
      for (let i = 0; i < queryData.QueryDataImages.length; i++) {
        const res = await cloudinaryUpload(queryData.QueryDataImages[i], "campus_voice/queries");
        if (!res || res.error) {
          return res.error;
        }
        images.push(res.url);
      }
    }

    //if query data is not present throw error
    if (!queryData.QueryCategory || !queryData.QueryResolver) return "Query data not present";

    const res = await fetch("/api/query", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sender_id: session.data.user.uid,
        receiver_id: queryData.QueryResolver.resolver_id,
        issue_id: queryData.QueryCategory.queryIssueType.issue_id,
        query_title: queryData.QueryTitle,
        query_desc: queryData.QueryDetails,
        query_type: queryData.PostVisibility,
        identity: queryData.UserIdentity.IsMasked,
        images
      })
    })

    let data = await res.json();
    if (!data || data.error) {
      return data.error;
    }
  }

  return (
    <QueryContext.Provider value={{ queryData, setQueryData, getDomains, domains, getSubDomains, subDomains,issueTypes,  getIssueTypes, ticket, setTicket , resolvers , setResolvers,insertQueryData}}>
      {props.children}
    </QueryContext.Provider>
  );
};