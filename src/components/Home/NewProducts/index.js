import React, { useEffect, useState } from "react";
import { getProducts } from "../../../functions/product";
import {
  NewProductsSection,
  ProductsSection,
  ProductTitle,
  CuteImg,
} from "./NewProductsElements";
import ProductCard from "../../Cards/ProductCard";
import LoadingCard from "../../Cards/LoadingCard";
import "./wave2.css";
import bear from "../../../images/BearBalloon.png";

const NewProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page] = useState(1);
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    const loadAllProducts = () => {
      setLoading(true);
      // sort, order, limit
      getProducts("createdAt", "desc", page).then((res) => {
        setProducts(res.data);
        setLoading(false);
      });
    };

    loadAllProducts();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <NewProductsSection>
        <ProductTitle>Our Newest Products</ProductTitle>
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
            <CuteImg
              src={bear}
              style={{ transform: `translateY(-${offsetY * 0.1}px)` }}
            />
        </ProductsSection>
        <div className="custom-shape-divider-bottom-1641091512">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </NewProductsSection>
    </>
  );
};

export default NewProducts;
