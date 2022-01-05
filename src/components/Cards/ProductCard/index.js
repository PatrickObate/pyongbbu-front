import React from "react";
import { Card } from "antd";
import image from "../../../images/NoImage.png";
import { Link } from "react-router-dom";

const { Meta } = Card;

const AdminProductCard = ({ product }) => {
  // destructure
  const { title, images, slug, price } = product;

  return (
    <Link to={`/product/${slug}`}>
      <Card
        hoverable
        cover={
          <img
            src={images && images.length ? images[0].url : image}
            style={{ height: "350px", objectFit: "cover" }}
            className="p-2"
            alt="product card"
          />
        }
      >
        <Meta title={title} description={`₱${price}`} className="text-center" />
      </Card>
    </Link>
  );
};

export default AdminProductCard;
