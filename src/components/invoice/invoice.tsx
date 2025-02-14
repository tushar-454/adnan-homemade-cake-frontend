/* eslint-disable jsx-a11y/alt-text */
import { OrderData } from '@/api/order';
import { formatDate } from '@/lib/utils';
import { Document, Image, Page, StyleSheet, Text, View } from '@react-pdf/renderer';

// Define styles
const styles = StyleSheet.create({
  page: { padding: 30 },
  section: { marginBottom: 10 },
  title: { fontSize: 16, marginBottom: 10, textAlign: 'center' },
  table: { display: 'flex', flexDirection: 'column', marginTop: 10 },
  row: { flexDirection: 'row' },
  cell: { flex: 1, padding: 5, fontSize: 14, textAlign: 'center', border: '1px solid #000' },
});

type InvoiceProps = {
  order: OrderData;
};

const Invoice = ({ order }: InvoiceProps) => {
  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>INVOICE</Text>

          <Image
            src={
              'https://res.cloudinary.com/karim-cloude/image/upload/v1739549026/rqafgvrui3npssgan3cs.jpg'
            }
            style={{
              width: 70,
              height: 70,
              marginBottom: 10,
              alignSelf: 'center',
              borderRadius: 10,
            }}
          />
        </View>
        <View>
          <Text style={{ marginBottom: 8, textAlign: 'center' }}>Adnan Home Made Cake</Text>
        </View>
        <Text style={{ textAlign: 'center' }}>Meghna, Comilla Bangladesh</Text>
        <View>
          <Text
            style={{
              display: 'flex',
              width: '100%',
              border: '1px solid gray',
              marginTop: 16,
              marginBottom: 16,
            }}
          ></Text>
        </View>
        <Text style={{ marginBottom: 8, fontSize: 15 }}>Order ID: {order.tracking_id}</Text>
        <Text style={{ marginBottom: 8, fontSize: 15 }}>Mobile: {order.phone}</Text>
        <Text style={{ marginBottom: 8, fontSize: 15 }}>Customer: {order.name}</Text>
        <Text style={{ marginBottom: 8, fontSize: 15 }}>Date: {formatDate(order.createdAt)}</Text>
        <Text style={{ marginBottom: 8, fontSize: 15 }}>
          Address: {order.address}, {order.sub_district}, {order.district}, {order.division}
        </Text>
        <Text style={{ marginBottom: 8, fontSize: 15 }}>COD TK: {order.price}</Text>

        <View style={styles.table}>
          <View style={styles.row}>
            <Text style={styles.cell}>Name</Text>
            <Text style={styles.cell}>Item</Text>
            <Text style={styles.cell}>Price</Text>
          </View>

          {order.line_items.map((item, index) => (
            <View style={styles.row} key={index}>
              <Text style={styles.cell}>{item.name}</Text>
              <Text style={styles.cell}>
                <Text style={{ display: 'flex', flexDirection: 'column' }}>
                  <Text>
                    {item.variant} x {item.quantity}
                  </Text>
                </Text>
              </Text>
              <Text style={styles.cell}>${item.price}</Text>
            </View>
          ))}
          <View style={styles.row}>
            <Text style={styles.cell}>Total</Text>
            <Text style={styles.cell}></Text>
            <Text style={styles.cell}>${order.price}</Text>
          </View>
        </View>

        <View>
          <Text
            style={{
              display: 'flex',
              width: '100%',
              marginTop: 16,
              marginBottom: 16,
              fontSize: 13,
              textAlign: 'center',
            }}
          >
            Thanks for shopping with us. We hope to see you again soon.
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export { Invoice };
