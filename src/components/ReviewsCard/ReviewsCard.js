import React from "react";
import "./ReviewsCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ReviewsCard = ({ review }) => {
  const { img, name, text, ratings } = review;

  return (
    <div>
      <div className="card text-center mb-5">
        <div>
          <div>
            <img src={img} className="card-img-top card-img " alt="..." />
          </div>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p>
              <span className="bg-warning fw-bold p-1 rounded-pill">
                {ratings}
                <FontAwesomeIcon className="ms-1" icon={faStar} />
              </span>
            </p>
            <p className="card-text">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCard;
