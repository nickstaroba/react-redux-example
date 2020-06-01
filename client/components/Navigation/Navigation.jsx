import "./Navigation.scss";

import { NavBar } from "@proto-component/react-library-a";
import React from "react";
import { NavLink } from "react-router-dom";

import BrandIcon from "../../assets/redux-logo.svg";

export const COMPONENT_NAME = "Navigation";

export const Navigation = () => {
  return (
    <NavBar
      mainIcon={<BrandIcon />}
      mainLink={<NavLink to={"/"}>React Redux Examples</NavLink>}
    >
      <NavLink to={"/orders/"}>Orders</NavLink>
      <NavLink to={"/users/"}>Posts</NavLink>
    </NavBar>
  );
};

Navigation.displayName = COMPONENT_NAME;
