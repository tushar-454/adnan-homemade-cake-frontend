'use client';
import { TProductsImages } from '@/api/product';
import Image from 'next/image';
import { useState } from 'react';

const CakesImages = ({ images }: { images: TProductsImages }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  return (
    <div className='mb-8 w-full px-4 md:w-1/2'>
      <Image
        src={selectedImage}
        alt='Product preview main image'
        width={1080}
        height={720}
        className='mb-4 w-full rounded-lg shadow-md'
      />
      <div className='flex justify-center gap-4 overflow-x-auto py-4'>
        {images?.map((image) => (
          <Image
            key={image}
            src={image}
            alt={image}
            width={200}
            height={200}
            className={`size-16 cursor-pointer rounded-md object-cover transition duration-300 hover:opacity-100 sm:size-20 ${image === selectedImage ? 'opacity-100' : 'opacity-60'}`}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
    </div>
  );
};

export { CakesImages };
