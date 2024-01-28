"use client"
import React, { useState } from "react";
import NavListContext from "./NavListContext";


export const NavListState = (props) => {
  const sideNavList = [
    {
      listName: "Dashboard",
      icon: "fa-solid fa-table-columns",
      link: "/Dashboard/Student",
    },
    {
      listName: "Ask Query",
      icon: "fa-regular fa-paper-plane",
      link: "/Dashboard/Student/AskQuery",
    },
    {
      listName: "Track",
      icon: "fa-solid fa-list-check",
      link: "/Dashboard/Student/TrackQuery",
    },
    {
      listName: "View Other Query",
      icon: "fa-solid fa-user-group",
      link: "/",
    },
    {
      listName: "Help Support",
      icon: "fa-regular fa-circle-question",
      link: "/",
    },
  ]
  const [getNavListInfo, setNavListInfo] = useState(sideNavList);
  return (
    <NavListContext.Provider value={{ getNavListInfo, setNavListInfo }}>
      {props.children}
    </NavListContext.Provider>
  )
}
