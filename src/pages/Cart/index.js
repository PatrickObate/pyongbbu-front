import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ProductCardInCheckout from "../../components/Cards/ProductCardInCheckout";
import CartHeader from "../../components/CartHeader";
import { userCart } from "../../functions/user";

const Cart = ({ history }) => {
  const { cart, user } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();

  const getTotal = () => {
    return cart.reduce((currentValue, nextValue) => {
      return currentValue + nextValue.count * nextValue.price;
    }, 0);
  };

  const saveOrderToDb = () => {
    // console.log("cart", JSON.stringify(cart, null, 4));
    userCart(cart, user.token)
      .then((res) => {
        console.log("CART POST RES", res);
        if (res.data.ok) history.push("/checkout");
      })
      .catch((err) => console.log("cart save err", err));
  };

  const saveCashOrderToDb = () => {
    dispatch({
      type: "PH",
      payload: true,
    });
    userCart(cart, user.token)
      .then((res) => {
        console.log("CART POST RES", res);
        if (res.data.ok) history.push("/checkout");
      })
      .catch((err) => console.log("cart save err", err));
  };

  const showCartItems = () => (
    <table className="table table-bordered">
      <thead className="thead-light">
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Title</th>
          <th scope="col">Price</th>
          <th scope="col">Count</th>
          <th scope="col">Google Drive Link</th>
          <th scope="col">Remove</th>
        </tr>
      </thead>

      {cart.map((p) => (
        <ProductCardInCheckout key={p._id} p={p} />
      ))}
    </table>
  );

  return (
    <>
      <CartHeader />
      <div
        className="container-fluid pt-5 bg-primary"
        style={{ minHeight: "100vh" }}
      >
        <div className="row">
          <div className="col-md-8">
            <h4>Cart / {cart.length} Product</h4>

            {!cart.length ? (
              <p>
                No products in cart. <Link to="/shop">Continue Shopping.</Link>
              </p>
            ) : (
              showCartItems()
            )}
          </div>
          <div className="col-md-4">
            <h4>Order Summary</h4>
            <hr />
            <p>Products</p>
            {cart.map((c, i) => (
              <div key={i}>
                <p>
                  {c.title} x {c.count} = ₱{c.price * c.count}
                </p>
              </div>
            ))}
            <hr />
            Total: <b>₱{getTotal()}</b>
            <hr />
            {user ? (
              <>
                <button
                  onClick={saveOrderToDb}
                  className="btn btn-sm btn-primary mt-2"
                  disabled
                  // disabled={!cart.length}
                >
                  Pay with Credit Card
                </button>
                <br />
                <button
                  onClick={saveCashOrderToDb}
                  className="btn btn-sm btn-warning text-white mt-2"
                  // disabled={!cart.length}
                >
                  Pay via G-cash, Paymaya, Bank Transfer
                </button>
              </>
            ) : (
              <button className="btn btn-sm mt-2">
                <Link
                  to={{
                    pathname: "/login",
                    state: { from: "cart" },
                  }}
                >
                  Login to Checkout
                </Link>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
