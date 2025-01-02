import { TProduct } from '@/api/product';
import { Container } from '@/components/shared/container';
import { BASE_URL } from '@/constant';
import Image from 'next/image';

type CakeDetailsProps = {
  params: {
    slug: string;
  };
};

const CakeDetails = async ({ params }: CakeDetailsProps) => {
  const { slug } = params;
  const res: Response = await fetch(`${BASE_URL}/products/${slug}`, {
    next: {
      revalidate: 3600,
    },
  });
  const cake: TProduct = await res.json();
  console.log(cake);
  return (
    <main>
      <Container>
        <div className='my-8 flex flex-wrap'>
          {/* <!-- Product Images --> */}
          <div className='mb-8 w-full px-4 md:w-1/2'>
            <Image
              src={cake?.images[0]}
              alt='Product'
              width={1080}
              height={720}
              className='mb-4 h-auto w-full rounded-lg shadow-md'
              id='mainImage'
            />
            <div className='flex justify-center gap-4 overflow-x-auto py-4'>
              {cake?.images?.map((image) => (
                <Image
                  key={image}
                  src={image}
                  alt={image}
                  width={200}
                  height={200}
                  className='size-16 cursor-pointer rounded-md object-cover opacity-60 transition duration-300 hover:opacity-100 sm:size-20'
                />
              ))}
            </div>
          </div>

          {/* <!-- Product Details --> */}
          <div className='w-full px-4 md:w-1/2'>
            <h2 className='mb-2 text-3xl font-bold'>{cake.name}</h2>
            <p className='mb-4 text-gray-600'>SKU: 00000000</p>
            <div className='mb-4'>
              <span className='mr-2 text-2xl font-bold'>{cake.discount}</span>
              <span className='text-gray-500 line-through'>${cake.price}</span>
            </div>
            <div className='mb-4 flex items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='size-6 text-yellow-500'
              >
                <path
                  fillRule='evenodd'
                  d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z'
                  clip-rule='evenodd'
                />
              </svg>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='size-6 text-yellow-500'
              >
                <path
                  fillRule='evenodd'
                  d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z'
                  clip-rule='evenodd'
                />
              </svg>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='size-6 text-yellow-500'
              >
                <path
                  fillRule='evenodd'
                  d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z'
                  clip-rule='evenodd'
                />
              </svg>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='size-6 text-yellow-500'
              >
                <path
                  fillRule='evenodd'
                  d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z'
                  clip-rule='evenodd'
                />
              </svg>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='size-6 text-yellow-500'
              >
                <path
                  fillRule='evenodd'
                  d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z'
                  clip-rule='evenodd'
                />
              </svg>
              <span className='ml-2 text-gray-600'>
                {cake.rating} ({cake.sell_count} Sells)
              </span>
            </div>
            <p className='mb-6 text-gray-700'>{cake.description}</p>

            <div className='mb-6'>
              <h3 className='mb-2 text-lg font-semibold'>Color:</h3>
              <div className='flex space-x-2'>
                <button className='h-8 w-8 rounded-full bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2'></button>
                <button className='h-8 w-8 rounded-full bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2'></button>
                <button className='h-8 w-8 rounded-full bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'></button>
              </div>
            </div>

            <div className='mb-6'>
              <label htmlFor='quantity' className='mb-1 block text-sm font-medium text-gray-700'>
                Quantity:
              </label>
              <input
                type='number'
                id='quantity'
                name='quantity'
                min='1'
                value='1'
                className='w-12 rounded-md border-gray-300 text-center shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
              />
            </div>

            <div className='mb-6 flex space-x-4'>
              <button className='flex items-center gap-2 rounded-md bg-indigo-600 px-6 py-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  className='size-6'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
                  />
                </svg>
                Add to Cart
              </button>
              <button className='flex items-center gap-2 rounded-md bg-gray-200 px-6 py-2 text-gray-800 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  className='size-6'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z'
                  />
                </svg>
                Wishlist
              </button>
            </div>

            <div>
              <h3 className='mb-2 text-lg font-semibold'>Key Features:</h3>
              <ul className='list-inside list-disc text-gray-700'>
                <li>Industry-leading noise cancellation</li>
                <li>30-hour battery life</li>
                <li>Touch sensor controls</li>
                <li>Speak-to-chat technology</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default CakeDetails;
