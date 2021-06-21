import React from "react";
import { useHistory, useLocation } from "react-router-dom";

const Contact = () => {
  const location = useLocation();
  const history = useHistory();
  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <h1 className="text-center mr-5 mt-5 font-weight-bold text-capitalize  mb-3">
        Welcome to my {location.pathname.replace("/", "")} page
      </h1>
      <button
        className=" btn1 btn btn-outline-success text-tra"
        onClick={history.goBack}
      >
        Go Back
      </button>
    </div>
  );
};

export default Contact;