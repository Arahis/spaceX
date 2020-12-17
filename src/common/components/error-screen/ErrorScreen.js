import React from "react";
import server_img from "../../../assets/img/server_down.png";

const ErrorScreen = () => {
  return (
    <div className="error-container">
      <img src={server_img} alt="server_down" />
      <h3>
        Ooops! Something went wrong. <br /> Please try again later.
      </h3>
    </div>
  );
};

export default ErrorScreen;
