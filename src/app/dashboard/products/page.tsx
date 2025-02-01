'use client';

import { handleMultipleUpload } from '@/lib/utils';

const Products = () => {
  return (
    <div>
      <input
        type='file'
        multiple
        onChange={(e) => {
          if (e.target.files) handleMultipleUpload(Array.from(e.target.files));
        }}
      />
    </div>
  );
};

export default Products;
