import React, { useState, useEffect } from "react";
import UserNav from "../../../components/UserNav";
import {
  WishlistContainer,
  WishlistWrapper,
  WishlistCol1,
  WishlistCol2,
  WishlistViewContainer,
} from "./WishlistElements";
import { DeleteOutlined } from "@ant-design/icons";
import { getWishlist, removeWishlist } from "../../../functions/user";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    const loadWishlist = () =>
      getWishlist(user.token).then((res) => {
        // console.log(res);
        setWishlist(res.data.wishlist);
      });
    loadWishlist();
  }, [user.token]);

  const loadWishlist = () =>
    getWishlist(user.token).then((res) => {
      // console.log(res);
      setWishlist(res.data.wishlist);
    });

  const handleRemove = (productId) =>
    removeWishlist(productId, user.token).then((res) => {
      loadWishlist();
    });

  return (
    <WishlistContainer>
      <WishlistWrapper>
        <WishlistCol1>
          <UserNav />
        </WishlistCol1>
        <WishlistCol2>
          <WishlistViewContainer>
            <div className="col text-center pt-3">
              <h4>Wishlist</h4>

              {wishlist.map((p) => (
                <div key={p._id} className="alert alert-secondary">
                  <Link to={`/product/${p.slug}`}>{p.title}</Link>
                  <span
                    onClick={() => handleRemove(p._id)}
                    className="btn btn-sm float-right"
                  >
                    <DeleteOutlined className="text-danger" />
                  </span>
                </div>
              ))}
            </div>
          </WishlistViewContainer>
        </WishlistCol2>
      </WishlistWrapper>
    </WishlistContainer>
  );
};

export default Wishlist;
