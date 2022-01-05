import React, { useState, useEffect } from "react";
import { getUserOrders } from "../../../functions/user";
import UserNav from "../../../components/UserNav";
import {
  HistoryContainer,
  HistoryWrapper,
  HistoryCol1,
  HistoryCol2,
  HistoryViewContainer,
} from "./HistoryElements";
import { useSelector } from "react-redux";
import ShowPaymentInfo from "../../../components/Cards/ShowPaymentInfo";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Invoice from "../../../components/order/invoice";

const History = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    loadUserOrders();
  }, []);

  const loadUserOrders = () =>
    getUserOrders(user.token).then((res) => {
      console.log(JSON.stringify(res.data, null, 4));
      setOrders(res.data);
    });

  const showOrderInTable = (order) => (
    <table className="table table-bordered">
      <thead className="thead-light">
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Price</th>
          <th scope="col">Count</th>
          <th scope="col">Google Drive</th>
        </tr>
      </thead>

      <tbody>
        {order.products.map((p, i) => (
          <tr key={i}>
            <td>
              <b>{p.product.title}</b>
            </td>
            <td>₱{p.product.price}</td>
            <td>{p.count}</td>
            <td>
              <a href={`${p.link}`} target="_blank" rel="noreferrer">
                Link To Google Drive
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  const showDownloadLink = (order) => (
    <PDFDownloadLink
      document={<Invoice order={order} />}
      fileName="invoice.pdf"
      className="btn btn-sm btn-block btn-outline-primary"
    >
      Download PDF
    </PDFDownloadLink>
  );
  const showEachOrders = () =>
    orders.reverse().map((order, i) => (
      <div key={i} className="m-5 p-3 card">
        <ShowPaymentInfo order={order} />
        {showOrderInTable(order)}
        <div className="row">
          <div className="col">{showDownloadLink(order)}</div>
        </div>
      </div>
    ));

  return (
    <HistoryContainer>
      <HistoryWrapper>
        <HistoryCol1>
          <UserNav />
        </HistoryCol1>
        <HistoryCol2>
          <HistoryViewContainer style={{ overflow: "scroll" }}>
            <div className="col text-center">
              <h4>
                {orders.length > 0
                  ? "User purchase orders"
                  : "No purchase orders"}
              </h4>
              {showEachOrders()}
            </div>
          </HistoryViewContainer>
        </HistoryCol2>
      </HistoryWrapper>
    </HistoryContainer>
  );
};

export default History;
