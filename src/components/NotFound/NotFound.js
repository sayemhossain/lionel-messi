import React from "react";
import "./NotFound.css";
import img404 from "../../assets/Img/img404.png";

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="d-flex justify-content-center align-items-center error-container">
        <img className="img-fluid rounded" src={img404} alt="" />
      </div>
    </div>
  );
};

export default NotFound;
