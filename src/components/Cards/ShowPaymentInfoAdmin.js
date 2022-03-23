import React from "react";

const ShowPaymentInfo = ({ order, showStatus = true }) => (
  <div>
    <p>
      <span>Order Id: {order.paymentIntent.id}</span>
      {" / "}
      <span>
        Amount:{" / "}
        {(order.paymentIntent.amount /= 100).toLocaleString("en-US", {
          style: "currency",
          currency: "PHP",
        })}
      </span>
      {" / "}
      <span>Currency: {order.paymentIntent.currency.toUpperCase()}</span>
      {" / "}
      <span>Method: {order.paymentIntent.payment_method_types[0]}</span>
      {" / "}
      <span>Payment: {order.paymentIntent.status.toUpperCase()}</span>
      {" / "}
      <span>Name: {order && order.orderedBy && order.orderedBy.name}</span>
      {" / "}
      <span>Email: {order && order.orderedBy && order.orderedBy.email}</span>
      {" / "}
      <span>
        Address: {order && order.orderedBy && order.orderedBy.address}
      </span>
      {" / "}
      <span>
        Contact Name: {order && order.orderedBy && order.orderedBy.contactName}
      </span>
      {" / "}
      <span>
        Contact Number: {order && order.orderedBy && order.orderedBy.contactNumber}
      </span>
      {" / "}
      <span>
        City: {order && order.orderedBy && order.orderedBy.city}
      </span>
      {" / "}
      <span>
        State: {order && order.orderedBy && order.orderedBy.state}
      </span>
      {" / "}
      <span>
        Postal Code: {order && order.orderedBy && order.orderedBy.postalCode}
      </span>
      {" / "}
      <span>
        Ordered on:{" "}
        {new Date(order.paymentIntent.created * 1000).toLocaleString()}
      </span>
      {" / "}
      <br />
      {showStatus && (
        <span className="badge bg-primary text-black">
          STATUS: {order.orderStatus}
        </span>
      )}
    </p>
  </div>
);

export default ShowPaymentInfo;
