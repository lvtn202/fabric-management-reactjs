import React from "react";
import { Page, Text, Document } from "@react-pdf/renderer";
import styles from "./../../commons/pdf_style";
import { numberFormat, parseTimestamp } from "../../commons/utils";

// Create Document Component
export function MyDocument(props) {
  const { detailOrder } = props;
  return (
    <Document>
      <Page size="A4" style={styles.body}>
        <Text style={styles.title}>ĐƠN ĐẶT HÀNG</Text>
        <Text style={styles.text}>{`Xưởng nhuộm: ${detailOrder.dyehouseName}`}</Text>
        <Text style={styles.text}>{`Loại vải: ${detailOrder.fabricType}`}</Text>
        <Text style={styles.text}>{`Màu: ${detailOrder.color}`}</Text>
        <Text style={styles.text}>{`Số lượng đặt: ${numberFormat(detailOrder.orderLength)} m`}</Text>
        <Text style={styles.text}>{`Ngày tạo: ${parseTimestamp(detailOrder.createDate)}`}</Text>
        <Text style={styles.text}>{`Nhân viên: ${detailOrder.employee}`}</Text>
      </Page>
    </Document>
  );
}
