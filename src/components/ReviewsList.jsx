import { useState, useEffect } from "react";
import { getReviews } from "../utils/api";

const ReviewsList = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    getReviews().then((reviews) => {
      setReviews(reviews);
    });
  }, []);
  return <h2>List of reviews here</h2>;
};

export default ReviewsList;
