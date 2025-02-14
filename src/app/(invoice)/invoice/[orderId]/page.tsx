'use client';

import { useOrderQuery } from '@/api/order';
import { Invoice } from '@/components/invoice/invoice';
import { PDFViewer } from '@react-pdf/renderer';
import { useEffect, useState } from 'react';

const InvoicePreview = () => {
  const [invoiceId, setInvoiceId] = useState(0);
  const { data: { data: order } = {}, refetch } = useOrderQuery(invoiceId, {
    skip: invoiceId === 0,
  });
  useEffect(() => {
    const path = window.location.pathname;
    const invoiceId = path.split('/').pop();
    if (Number(invoiceId)) {
      setInvoiceId(Number(invoiceId));
    }
  }, [refetch]);

  return (
    <div>
      <PDFViewer width='100%' className='h-screen'>
        {order && <Invoice order={order} />}
      </PDFViewer>
    </div>
  );
};

export default InvoicePreview;
