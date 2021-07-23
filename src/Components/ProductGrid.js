import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

export default function ProductGrid() {
  const [products, setProducts] = useState();
  const [isLoading, setLoading] = useState(true);

  // Fetch products' data
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
    // Each product will create its own ProductCard
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} name={product.name} id={product.id} />
      ))}
    </div>
  );
}
