import React from "react";
import { useLocation, useHistory } from "react-router-dom";

const One = () => {
  const location = useLocation();
  const history = useHistory();
  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <h1 className="text-center mr-5 mt-5 font-weight-bold mb-3">
        Welcome to my {location.pathname.replace("/", "")}Home page
      </h1>
      <button className="btn btn-outline-success" onClick={history.goBack}>
        Go Back
      </button>
    </div>
  );
};

export default One;
