import React from "react";
import messi from "../../assets/Img/leo.jpg";
import useReviews from "../../hooks/useReviews";
import "./Home.css";
import ReviewsCard from "../ReviewsCard/ReviewsCard";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [reviews, setReviews] = useReviews();
  const homeReviews = reviews.slice(0, 3);
  return (
    <div>
      <section className="container py-5">
        <div className="row">
          <div className="col-lg-7 home-txt p-4">
            <div>
              <h3 className="mb-4">
                <span className="text-danger text-uppercase">Lionel Messi</span>
                <br></br> The greatest footballer of all time
              </h3>
              <p className="mb-4">
                Lionel Messi, in full Lionel Andrés Messi, also called Leo
                Messi, (born June 24, 1987, Rosario, Argentina), Argentine-born
                football (soccer) player who was named Fédération Internationale
                de Football Association (FIFA) world player of the year six
                times (2009–12, 2015, and 2019)...
              </p>
              <Link to="/about" className="btn btn-danger">
                Read more <FontAwesomeIcon icon={faArrowRightLong} />
              </Link>
            </div>
          </div>
          <div className="col-lg-5 home-img">
            <img className="img-fluid rounded" src={messi} alt="" />
          </div>
        </div>
      </section>
      <section className="py-5 bg-light">
        <div className="container">
          <h1 className="text-center">
            Reviews on <span className="text-danger">Messi</span>
          </h1>
          <div className="reviews-container mt-5">
            {homeReviews.map((review) => (
              <ReviewsCard key={review.id} review={review}></ReviewsCard>
            ))}
          </div>
          <div className="text-center mt-5">
            <Link to="/reviews" className=" btn btn-danger">
              See more reviews <FontAwesomeIcon icon={faArrowRightLong} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
