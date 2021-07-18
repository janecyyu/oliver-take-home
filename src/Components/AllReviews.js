import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import ReviewCard from "./ReviewCard";

export default function AllReviews(props) {
  const productId = props.match.params.id;
  const [reviews, setReviews] = useState();
  const [isLoading, setLoading] = useState(true);
  const [product, setProduct] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await axios("http://localhost:3004/reviews");
      const products = await axios("http://localhost:3004/products");
      setReviews(response.data.filter((r) => r.productId == productId));
      setProduct(products.data.filter((p) => p.id == productId)[0]["name"]);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="allReviews">
      <h1>🌟 All reviews for {product}</h1>
      {reviews.map((review) => (
        <ReviewCard
          key={review.id}
          name={review.author}
          title={review.headline}
          content={review.body}
          rank={review.star_rating}
        />
      ))}
      <Link to="/">Back to Home 🏠</Link>
      <Link className="links" to={`/write_review/${productId}`}>
        Write A Review 👀
      </Link>
    </div>
  );
}
