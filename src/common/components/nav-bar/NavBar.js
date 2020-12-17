import React from "react";
import logo from "../../../assets/img/spacex_logo.png";
import avatar from "../../../assets/img/avatar.jpg";
import { Layout, Avatar, Image } from "antd";
const { Header } = Layout;

const NavBar = () => {
  return (
    <Header className="nav-bar">
      <div className="logo">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <p className="header-text">Created by: <span className="text-bold">Dasha</span></p>
      <Avatar 
      size={40}
      src={<Image src={avatar} />}
      />
    </Header>
  );
};

export default NavBar;
