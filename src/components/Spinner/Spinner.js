import React from "react";
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="loading">
      <button className="btn btn-danger">Please Wait, Processing...</button>
    </div>
  );
};

export default Spinner;
