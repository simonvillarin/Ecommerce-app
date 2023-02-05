import * as React from "react";
import design from "../css/Pagination.module.css";

export default function Pagination({
  totalPosts,
  postPerPage,
  setCurrentPage,
  currentPage,
}) {
  let products = [];

  // set the number of products
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    products.push(i);
  }

  return (
    <div className={design.pagination}>
      {products.map((product, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(product)}
            className={product === currentPage ? "active" : ""}
          >
            {product}
          </button>
        );
      })}
    </div>
  );
}
