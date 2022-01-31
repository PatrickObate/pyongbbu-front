import React, { useEffect, useState } from "react";
import { getProduct } from "../../functions/product";
import {
  CarouselContainer,
  ProductsContainer,
  ComponentsContainer,
  CarouselImage,
  ProductTitle,
  ProductDescription,
  ProductPrice,
  AddCart,
  CarouselWrapper,
  ProductThing,
  DetailsContainer,
} from "./ProductComponents";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NoImage from "../../images/NoImage.png";
import lodash from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addToWishlist } from "../../functions/user";

const Product = ({ match, history }) => {
  const [product, setProduct] = useState({});
  const { slug } = match.params;

  // redux
  const { user } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    // create cart array
    toast.success(`${title} has been added`);
    let cart = [];
    if (typeof window !== "undefined") {
      // if cart is in local storgae GET it
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      // push new product to cart
      cart.push({
        ...product,
        count: 1,
      });
      // remove duplicates
      let unique = lodash.uniqWith(cart, lodash.isEqual);
      // save to local storage
      // console.log("unique", unique);
      localStorage.setItem("cart", JSON.stringify(unique));

      // add to redux state
      dispatch({
        type: "ADD_TO_CART",
        payload: unique,
      });
    }
  };

  useEffect(() => {
    const loadSingleProduct = () =>
      getProduct(slug).then((res) => setProduct(res.data));

    loadSingleProduct();
  }, [slug]);

  const handleAddToWishlist = (e) => {
    e.preventDefault();
    addToWishlist(product._id, user.token).then((res) => {
      toast.success("Added to wishlist");
      history.push("/user/wishlist");
    });
  };

  const { images, title, description, price, sold, quantity } = product;

  return (
    <>
      <ProductsContainer>
        <CarouselContainer>
          <CarouselWrapper>
            {images && images.length ? (
              <Carousel
                showThumbs={false}
                autoPlay
                infiniteLoop
                showArrows={false}
                showStatus={false}
                showIndicators={false}
                stopOnHover={true}
                emulateTouch={true}
                useKeyboardArrows={true}
                swipeable={true}
                dynamicHeight={true}
              >
                {images &&
                  images.map((i) => (
                    <img src={i.url} key={i.public_id} alt="" />
                  ))}
              </Carousel>
            ) : (
              <CarouselImage src={NoImage} />
            )}
          </CarouselWrapper>
        </CarouselContainer>
        <ComponentsContainer>
          <DetailsContainer>
            <ProductTitle>{title}</ProductTitle>
            <ProductPrice>₱{price}</ProductPrice>
            <ProductDescription>{description}</ProductDescription>
            <ProductThing>Quantity Sold: {sold}</ProductThing>
            <ProductThing>Available: {quantity}</ProductThing>
          </DetailsContainer>
            
            
          <AddCart onClick={handleAddToCart} disabled={product.quantity < 1}>
            {product.quantity < 1 ? "Out of stock" : "Add to Cart"}
          </AddCart>
          {/* <AddCart onClick={handleAddToWishlist}>Add to Wishlist</AddCart> */}
        </ComponentsContainer>
      </ProductsContainer>
    </>
  );
};

export default Product;
