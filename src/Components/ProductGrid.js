import React, { useState, useEffect } from "react";
import Grid from "./Grid";
import axios from "axios";

export default function ProductGrid() {
  const [products, setProducts] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await axios("http://localhost:3004/products");
      setProducts(response.data);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {products.map((product) => (
        <Grid key={product.id} name={product.name} />
      ))}
    </div>
  );
}
