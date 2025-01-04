'use client';
import { TProduct } from '@/api/product';
import { useToast } from '@/hooks/use-toast';
import { getDataLocalStorage, setDataLocalStorage } from '@/lib/utils';
import { setCartlength } from '@/store/features/globalReducer';
import { AppDispatch } from '@/store/store';
import { ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

const AddToCart = ({ cake }: { cake: TProduct }) => {
  const { toast } = useToast();
  const dispatch = useDispatch<AppDispatch>();
  const [variantId, setVariantId] = useState('');
  const addtocart = () => {
    const variant = cake.variants.find((variant) => variant.id === variantId);
    if (!variant) {
      toast({
        title: 'Select Variant',
        description: 'Please select a variant to add to cart',
      });
      return;
    }
    const cart = {
      id: cake.id,
      image: cake.images[0],
      name: cake.name,
      category: cake.category,
      variant,
      price: variant.price,
      discount: cake.discount,
      quantity: 1,
      totalPrice: variant.price,
    };
    setDataLocalStorage('carts', cart);
    dispatch(setCartlength(getDataLocalStorage('carts').length));
    toast({
      title: 'Added to cart',
      description: `${cake.name} - ${variant.name} added to cart`,
    });
  };

  return (
    <>
      <div className='mb-6'>
        <h3 className='mb-2 text-lg font-semibold'>Variants:</h3>
        <div className='flex space-x-2'>
          {cake.variants.map((variant) => (
            <Badge
              key={variant.id}
              variant={'secondary'}
              onClick={() => setVariantId(variantId === variant.id ? '' : variant.id)}
              className={`cursor-pointer ${variant.id === variantId ? 'bg-gray-300 hover:bg-gray-300' : ''}`}
            >
              {variant.name}
              {variant.price && ` - $${variant.price}`}
            </Badge>
          ))}
        </div>
      </div>

      <div className='mb-6 flex space-x-4'>
        <Button variant={'default'} onClick={addtocart}>
          <span className='flex items-center gap-2'>
            <ShoppingCart />
            Add to Cart
          </span>
        </Button>
      </div>
    </>
  );
};

export default AddToCart;
