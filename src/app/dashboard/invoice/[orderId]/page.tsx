const Invoice = () => {
  return (
    <main className="bg-white rounded-lg shadow-lg px-8 py-10 max-w-xl mx-auto">
      <header className="flex justify-between mb-8">
        <div className="flex items-center">
          <img
            className="h-8 w-8 mr-2"
            src="https://tailwindflex.com/public/images/logos/favicon-32x32.png"
            alt="Logo"
          />
          <h1 className="text-gray-700 font-semibold text-lg">Adnan Homemade Cake</h1>
        </div>
        <div className="text-gray-700 text-right">
          <h2 className="font-bold text-xl mb-2">INVOICE</h2>
          <p className="text-sm">Date: 01/05/2023</p>
          <p className="text-sm">Invoice #: INV12345</p>
        </div>
      </header>

      <section className="border-b-2 border-gray-300 pb-8 mb-8">
        <div className="flex justify-between">
          <address>
            <h2 className="text-xl font-bold mb-2">Bill To:</h2>
            <p className="text-gray-700 mb-2">John Doe</p>
            <p className="text-gray-700 mb-2">123 Main St.</p>
          </address>
          <address>
            <h2 className="text-xl font-bold mb-2">Shipping:</h2>
            <p className="text-gray-700 mb-2">Anytown, USA 12345</p>
            <p className="text-gray-700">johndoe@example.com</p>
          </address>
        </div>
      </section>

      <section>
        <table className="w-full text-left mb-8">
          <thead>
            <tr>
              <th className="text-gray-700 font-bold uppercase py-2">Description</th>
              <th className="text-gray-700 font-bold uppercase py-2">Quantity</th>
              <th className="text-gray-700 font-bold uppercase py-2">Price</th>
              <th className="text-gray-700 font-bold uppercase py-2">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-4 text-gray-700">Product 1</td>
              <td className="py-4 text-gray-700">1</td>
              <td className="py-4 text-gray-700">$100.00</td>
              <td className="py-4 text-gray-700">$100.00</td>
            </tr>
            <tr>
              <td className="py-4 text-gray-700">Product 2</td>
              <td className="py-4 text-gray-700">2</td>
              <td className="py-4 text-gray-700">$50.00</td>
              <td className="py-4 text-gray-700">$100.00</td>
            </tr>
            <tr>
              <td className="py-4 text-gray-700">Product 3</td>
              <td className="py-4 text-gray-700">3</td>
              <td className="py-4 text-gray-700">$75.00</td>
              <td className="py-4 text-gray-700">$225.00</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-8">
        <div className="flex justify-end">
          <p className="text-gray-700 mr-2">Subtotal:</p>
          <p className="text-gray-700">$425.00</p>
        </div>
        <div className="text-right">
          <p className="text-gray-700 mr-2">Tax:</p>
          <p className="text-gray-700">$25.50</p>
        </div>
        <div className="flex justify-end">
          <p className="text-gray-700 mr-2">Total:</p>
          <p className="text-gray-700 font-bold text-xl">$450.50</p>
        </div>
      </section>

      <footer className="border-t-2 border-gray-300 pt-8">
        <p className="text-gray-700 mb-2">Payment is due within 30 days. Late payments are subject to fees.</p>
        <p className="text-gray-700 mb-2">Please make checks payable to Your Company Name and mail to:</p>
        <address className="text-gray-700">123 Main St., Anytown, USA 12345</address>
      </footer>
    </main>
  );
};

export { Invoice };
