import { OrderData } from '@/api/order';
import { formatDate } from '@/lib/utils';
import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer';

// Define styles
const styles = StyleSheet.create({
  page: { padding: 30 },
  section: { marginBottom: 10 },
  title: { fontSize: 20, marginBottom: 10 },
  table: { display: 'flex', flexDirection: 'column', marginTop: 10 },
  row: { flexDirection: 'row', borderBottom: '1px solid #000', padding: 5 },
  cell: { flex: 1, textAlign: 'center' },
});

type InvoiceProps = {
  order: OrderData;
};

const Invoice = ({ order }: InvoiceProps) => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Invoice</Text>
        <Text>Order ID: {order.tracking_id}</Text>
        <Text>Customer: {order.name}</Text>
        <Text>Date: {formatDate(order.createdAt)}</Text>
      </View>

      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={styles.cell}>Item</Text>
          <Text style={styles.cell}>Qty</Text>
          <Text style={styles.cell}>Price</Text>
        </View>

        {order.line_items.map((item, index) => (
          <View style={styles.row} key={index}>
            <Text style={styles.cell}>{item.name}</Text>
            <Text style={styles.cell}>{item.quantity}</Text>
            <Text style={styles.cell}>${item.price}</Text>
          </View>
        ))}

        <View style={styles.row}>
          <Text style={styles.cell}>Total</Text>
          <Text style={styles.cell}></Text>
          <Text style={styles.cell}>${order.price}</Text>
        </View>
      </View>
    </Page>
  </Document>
);

export { Invoice };
