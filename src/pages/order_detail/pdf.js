import React from "react";
import { Page, Text, View, Document } from "@react-pdf/renderer";
import styles from "./../../commons/pdf_style";
import { numberFormat, parseTimestamp } from "../../commons/utils";

// Create Document Component
export function MyDocument(props) {
  const { detailOrder } = props;
  return (
    <Document>
      <Page size="A4" style={styles.body}>
        <Text style={styles.title}>ĐƠN ĐẶT HÀNG</Text>
        <Text style={styles.title}>{`Xưởng nhuộm: ${detailOrder.dyehouseName}`}</Text>
        <Text style={styles.title}>{`Loại vải: ${detailOrder.fabricType}`}</Text>
        <Text style={styles.title}>{`Màu: ${detailOrder.color}`}</Text>
        <Text style={styles.title}>{`Số lượng đặt: ${numberFormat(detailOrder.orderLength)}`}</Text>
        <Text style={styles.title}>{`Ngày tạo: ${parseTimestamp(detailOrder.createDate)}`}</Text>
        <Text style={styles.title}>{`Nhân viên: ${detailOrder.employee}`}</Text>
      </Page>
    </Document>
  );
}
