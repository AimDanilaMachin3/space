import React from "react";
import "./SimilarNew.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";

const SimilarNew = (props) => {
  const navigate = useNavigate();
  const params = useParams();

  if (params.id != props.similarNews.id) {
    debugger;
    return (
      <div className="similarWrapper">
        <button
          type="button"
          className="buttonSim"
          onClick={() => navigate("/news/" + props.similarNews.id)}
        >
          {props.similarNews.title}
          {props.similarNews.id}
        </button>
      </div>
    );
  } else {
    debugger;
    return <></>;
  }
};

export default SimilarNew;
