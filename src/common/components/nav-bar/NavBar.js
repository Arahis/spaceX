import React from "react";
import logo from "../../../assets/img/spacex_logo.png";
import { Layout } from "antd";
const { Header } = Layout;

const NavBar = () => {
  return (
    <Header>
      <div className="logo">
        <img src={logo} alt="logo" className="logo" />
      </div>
    </Header>
  );
};

export default NavBar;
