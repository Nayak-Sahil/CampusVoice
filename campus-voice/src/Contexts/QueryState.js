"use client"
import React, { useState } from "react";
import QueryContext from "./QueryContext";
import { useSession } from "next-auth/react";

export const QueryState = (props) => {
  /**
   * ? (currentformState == "WRITE") 
   * ? (currentformState == "READ_DESTINATION") 
   * ? (currentformState == "MASK_IDENTITY")
   * ? (currentformState == "SEND")
   */
  const [queryData, setQueryData] = useState({FormState: "WRITE"});
  
  return (
    <QueryContext.Provider value={{queryData, setQueryData}}>
        {props.children}
    </QueryContext.Provider>
  );
};