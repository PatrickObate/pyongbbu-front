import React from "react";
import { Document, Page, Text, StyleSheet } from "@react-pdf/renderer";
import {
  Table,
  TableHeader,
  TableCell,
  TableBody,
  DataTableCell,
} from "@david.kucsai/react-pdf-table";

const Invoice = ({ order }) => (
  <Document>
    <Page style={styles.body}>
      <Text style={styles.header} fixed>
        ~ {new Date().toLocaleString()} ~
      </Text>
      <Text style={styles.title}>Order Invoice</Text>
      <Text style={styles.author}>pyongbbu</Text>
      <Text style={styles.subtitle}>Order Summary</Text>

      <Table>
        <TableHeader>
          <TableCell>Title</TableCell>
          <TableCell>Price</TableCell>
          <TableCell>Quantity</TableCell>
        </TableHeader>
      </Table>

      <Table data={order.products}>
        <TableBody>
          <DataTableCell getContent={(x) => x.product.title} />
          <DataTableCell getContent={(x) => `${x.product.price} php`} />
          <DataTableCell getContent={(x) => x.count} />
        </TableBody>
      </Table>

      <Text style={styles.text}>
        <Text>
          Date: {" "}
          {new Date(order.paymentIntent.created * 1000).toLocaleString()}
        </Text>
        {"\n"}
        <Text>
          Order Id: {" "}
          {order.paymentIntent.id}
        </Text>
        {"\n"}
        <Text>
          Method: {" "}
          {order.paymentIntent.payment_method_types[0]}
        </Text>
        {"\n"}
        <Text>
          Payment: {" "}
          {order.paymentIntent.status.toUpperCase()}
        </Text>
        {"\n"}
        <Text>
          Total Paid: {" "}
          {order.paymentIntent.amount}
        </Text>
        {"\n"}
        <Text>
          Costumer Name: {" "}
          {order && order.orderedBy && order.orderedBy.contactName}
        </Text>
        {"\n"}
        <Text>
          Costumer Email: {" "}
          {order && order.orderedBy && order.orderedBy.email}
        </Text>
        {"\n"}
        <Text>
          Costumer Address: {" "}
          {order && order.orderedBy && order.orderedBy.address}
        </Text>
        {"\n"}
        <Text>
          Costumer Number: {" "}
          {order && order.orderedBy && order.orderedBy.contactNumber}
        </Text>
      </Text>
      <Text style={styles.footer}> ~ Thank you for shopping with us ~ </Text>
    </Page>
  </Document>
);

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  author: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  footer: {
    padding: "100px",
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

export default Invoice;
