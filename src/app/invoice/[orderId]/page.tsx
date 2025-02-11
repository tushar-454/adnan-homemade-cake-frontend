import { assets } from '@/assets/assets';
import Image from 'next/image';

const Invoice = () => {
  return (
    <main className='mx-auto max-w-xl rounded-lg bg-white px-8 py-10 shadow-lg'>
      <header className='mb-8 flex justify-between'>
        <div className='flex items-center'>
          <Image
            src={assets.logo}
            alt='logo'
            width={100}
            height={100}
            className='mr-2 max-w-12 cursor-pointer rounded-full shadow-lg'
          />
          <h1 className='text-lg font-semibold text-gray-700'>Adnan Homemade Cake</h1>
        </div>
        <div className='text-right text-gray-700'>
          <h2 className='mb-2 text-xl font-bold'>INVOICE</h2>
          <p className='text-sm'>Date: 01/05/2023</p>
          <p className='text-sm'>Invoice #: INV12345</p>
        </div>
      </header>

      <section className='mb-8 border-b-2 border-gray-300 pb-8'>
        <div className='flex justify-between'>
          <address>
            <h2 className='mb-2 text-xl font-bold'>Bill To:</h2>
            <p className='mb-2 text-gray-700'>John Doe</p>
            <p className='mb-2 text-gray-700'>123 Main St.</p>
          </address>
          <address>
            <h2 className='mb-2 text-xl font-bold'>Shipping:</h2>
            <p className='mb-2 text-gray-700'>Anytown, USA 12345</p>
            <p className='text-gray-700'>johndoe@example.com</p>
          </address>
        </div>
      </section>

      <section>
        <table className='mb-8 w-full text-left'>
          <thead>
            <tr>
              <th className='py-2 font-bold uppercase text-gray-700'>Description</th>
              <th className='py-2 font-bold uppercase text-gray-700'>Quantity</th>
              <th className='py-2 font-bold uppercase text-gray-700'>Price</th>
              <th className='py-2 font-bold uppercase text-gray-700'>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='py-4 text-gray-700'>Product 1</td>
              <td className='py-4 text-gray-700'>1</td>
              <td className='py-4 text-gray-700'>$100.00</td>
              <td className='py-4 text-gray-700'>$100.00</td>
            </tr>
            <tr>
              <td className='py-4 text-gray-700'>Product 2</td>
              <td className='py-4 text-gray-700'>2</td>
              <td className='py-4 text-gray-700'>$50.00</td>
              <td className='py-4 text-gray-700'>$100.00</td>
            </tr>
            <tr>
              <td className='py-4 text-gray-700'>Product 3</td>
              <td className='py-4 text-gray-700'>3</td>
              <td className='py-4 text-gray-700'>$75.00</td>
              <td className='py-4 text-gray-700'>$225.00</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className='mb-8'>
        <div className='flex justify-end'>
          <p className='mr-2 text-gray-700'>Subtotal:</p>
          <p className='text-gray-700'>$425.00</p>
        </div>
        <div className='text-right'>
          <p className='mr-2 text-gray-700'>Tax:</p>
          <p className='text-gray-700'>$25.50</p>
        </div>
        <div className='flex justify-end'>
          <p className='mr-2 text-gray-700'>Total:</p>
          <p className='text-xl font-bold text-gray-700'>$450.50</p>
        </div>
      </section>

      <footer className='border-t-2 border-gray-300 pt-8'>
        <p className='mb-2 text-gray-700'>
          Payment is due within 30 days. Late payments are subject to fees.
        </p>
        <p className='mb-2 text-gray-700'>
          Please make checks payable to Your Company Name and mail to:
        </p>
        <address className='text-gray-700'>123 Main St., Anytown, USA 12345</address>
      </footer>
    </main>
  );
};

export default Invoice;
