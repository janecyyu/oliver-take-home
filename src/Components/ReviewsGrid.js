import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import ReviewCard from "./ReviewCard";

export default function AllReviews(props) {
  const productId = parseInt(props.match.params.id);
  const [reviews, setReviews] = useState();
  const [isLoading, setLoading] = useState(true);
  const [product, setProduct] = useState("");

  // Fetch reviews and product name, use filter method to get the specific element
  useEffect(() => {
    async function fetchData() {
      const response = await axios("http://localhost:3004/reviews");
      const products = await axios("http://localhost:3004/products");
      setReviews(
        response.data.filter((r) => parseInt(r.productId) === productId)
      );
      setProduct(products.data.filter((p) => p.id === productId)[0]["name"]);
      setLoading(false);
    }
    fetchData();
  }, [productId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    // - Title with the product name
    // - Each Review will create a ReviewCard
    // - Links to Home and Write_Review page
    <div className="allReviews">
      <h1>
        <span role="img" aria-label="all-reviews">
          🛍️
        </span>{" "}
        All reviews for {product}
      </h1>
      {reviews.map((review) => (
        <ReviewCard
          key={review.id}
          name={review.author}
          title={review.headline}
          content={review.body}
          rank={review.star_rating}
        />
      ))}
      <Link to="/">
        Back to Home{" "}
        <span role="img" aria-label="homepage">
          🏠
        </span>
      </Link>
      <Link className="links" to={`/write_review/${productId}`}>
        Write A Review{" "}
        <span role="img" aria-label="write-a-review">
          👀
        </span>
      </Link>
    </div>
  );
}
