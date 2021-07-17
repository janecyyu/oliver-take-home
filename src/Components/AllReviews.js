import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import ReviewCard from "./ReviewCard";

export default function AllReviews(props) {
  const productId = props.match.params.id;
  console.log(productId);
  const [reviews, setReviews] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await axios("http://localhost:3004/reviews");
      setReviews(response.data.filter((r) => r.productId == productId));
      setLoading(false);
    }
    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      reviews Here
      {reviews.map((review) => (
        <ReviewCard
          name={review.author}
          title={review.headline}
          content={review.body}
          rank={review.star_rating}
        />
      ))}
      <Link to="/">Back to Home 🏠</Link>
      <Link to={`/write_review/${productId}`}>Write A Review 👀</Link>
    </div>
  );
}
