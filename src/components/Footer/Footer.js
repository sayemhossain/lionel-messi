import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleDown,
  faBug,
  faLaptopCode,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="py-5 bg-dark">
      <div className="container">
        <div className="icons text-center mb-3">
          <FontAwesomeIcon
            className="text-white fs-4 me-4"
            icon={faArrowAltCircleDown}
          />
          <FontAwesomeIcon
            className="text-white fs-4 me-4"
            icon={faLaptopCode}
          />
          <FontAwesomeIcon
            className="text-white fs-4 me-4"
            icon={faLayerGroup}
          />
          <FontAwesomeIcon className="text-white fs-4" icon={faBug} />
        </div>
        <div>
          <p className="text-center text-white ">
            Copyright 2022. All Right Reserved. Develop by{" "}
            <span className="text-danger">Shayem Hossain</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
