import React from "react";
import ModalImage from "react-modal-image";
import NoImage from "../../images/NoImage.png";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { CloseOutlined } from "@ant-design/icons";

const ProductCardInCheckout = ({ p }) => {
  let dispatch = useDispatch();

  const handlePictureChange = (e) => {
    console.log("link added", e.target.value);

    let cart = [];
    if (typeof window !== "undefined") {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }

      cart.map((product, i) => {
        if (product._id === p._id) {
          cart[i].link = e.target.value;
        }
        return console.log();
      });

      //  console.log('cart udpate color', cart)
      localStorage.setItem("cart", JSON.stringify(cart));
      dispatch({
        type: "ADD_TO_CART",
        payload: cart,
      });
    }
  };

  const handleQuantityChange = (e) => {
    // console.log("available quantity", p.quantity);
    let count = e.target.value < 1 ? 1 : e.target.value;

    if (count > p.quantity) {
      toast.error(`Max available quantity: ${p.quantity}`);
      return;
    }

    let cart = [];

    if (typeof window !== "undefined") {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }

      cart.map((product, i) => {
        if (product._id === p._id) {
          cart[i].count = count;
        }
        return console.log();
      });

      localStorage.setItem("cart", JSON.stringify(cart));
      dispatch({
        type: "ADD_TO_CART",
        payload: cart,
      });
    }
  };

  const handleRemove = () => {
    // console.log(p._id, 'to remove')

    let cart = [];

    if (typeof window !== "undefined") {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }

      cart.map((product, i) => {
        if (product._id === p._id) {
          cart.splice(i, 1);
        }
        return console.log();
      });

      localStorage.setItem("cart", JSON.stringify(cart));
      dispatch({
        type: "ADD_TO_CART",
        payload: cart,
      });
    }
    return console.log();
  };

  return (
    <tbody>
      <tr>
        <td className="text-center ">
          <div style={{ width: "80px", height: "auto" }}>
            {p.images.length ? (
              <ModalImage small={p.images[0].url} large={p.images[0].url} />
            ) : (
              <ModalImage small={NoImage} large={NoImage} />
            )}
          </div>
        </td>
        <td>{p.title}</td>
        <td>₱{p.price}</td>
        <td className="text-center w-25">
          <input
            type="number"
            className="form-control"
            value={p.count}
            onChange={handleQuantityChange}
          />
        </td>
        <td className="text-center w-25">
          <input
            type="text"
            className="form-control"
            onChange={handlePictureChange}
            // style={"width: 30px"}
          />
        </td>
        <td className="text-center">
          <CloseOutlined
            onClick={handleRemove}
            classname="text-danger pointer"
            style={{ color: "red" }}
          />
        </td>
      </tr>
    </tbody>
  );
};

export default ProductCardInCheckout;
