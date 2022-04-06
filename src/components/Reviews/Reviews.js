import React from "react";
import useReviews from "../../hooks/useReviews";
import ReviewsCard from "../ReviewsCard/ReviewsCard";
import Spinner from "../Spinner/Spinner";
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReviews, loading] = useReviews();
  return (
    <>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <div className="reviews container">
          <h3 className="text-center text-uppercase mt-5">
            Reviews About <span className="text-danger ">Messi</span>
          </h3>
          <p className="text-center mb-5">
            Total review:{" "}
            <span className="text-danger fw-blod">{reviews.length}</span>
          </p>
          <div className="card-container">
            {reviews.map((review) => (
              <ReviewsCard key={review.id} review={review}></ReviewsCard>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Reviews;
