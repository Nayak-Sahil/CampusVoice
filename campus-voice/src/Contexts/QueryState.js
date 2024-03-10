"use client"
import React, { useState } from "react";
import QueryContext from "./QueryContext";

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
    const res = await fetch("/api/category-details?category=domains", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    })

    let data = await res.json();
    if (!data || data.error) {
      return error;
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

    const res = await fetch(`/api/category-details?category=subdomains&domain_id=${domain_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    })

    let data = await res.json();
    if (!data || data.error) {
      return error;
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

  return (
    <QueryContext.Provider value={{ queryData, setQueryData, getDomains, domains, getSubDomains, subDomains,issueTypes,  getIssueTypes, ticket, setTicket }}>
      {props.children}
    </QueryContext.Provider>
  );
};