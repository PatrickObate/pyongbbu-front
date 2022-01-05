import React, { useEffect, useState } from "react";
import { getProducts, getProductsCount } from "../../../functions/product";
import {
  NewProductsSection,
  ProductsSection,
  ProductTitle,
  PaginationDiv,
} from "./NewProductsElements";
import ProductCard from "../../Cards/ProductCard";
import LoadingCard from "../../Cards/LoadingCard";
import { Pagination } from "antd";

const NewProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page] = useState(1);

  useEffect(() => {
    const loadAllProducts = () => {
      setLoading(true);
      // sort, order, limit
      getProducts("sold", "desc", page).then((res) => {
        setProducts(res.data);
        setLoading(false);
      });
    };
    loadAllProducts()
  }, [page]);

  return (
    <>
      <NewProductsSection>
        <ProductTitle>Our Best Sellers</ProductTitle>
        <ProductsSection>
          <div className="container">
            {loading ? (
              <LoadingCard count={3} />
            ) : (
              <div className="row">
                {products.map((product) => (
                  <div key={product._id} className="col-md-4">
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </ProductsSection>
      </NewProductsSection>
    </>
  );
};

export default NewProducts;
