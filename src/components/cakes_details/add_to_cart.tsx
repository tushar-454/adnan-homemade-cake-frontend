'use client';
import { TProduct } from '@/api/product';
import { useToast } from '@/hooks/use-toast';
import { addCartItem, updateCartItem } from '@/store/features/cart';
import { AppDispatch, RootState } from '@/store/store';
import { ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Taka } from '../shared/taka';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

const AddToCart = ({ cake }: { cake: TProduct }) => {
  const { toast } = useToast();
  const dispatch = useDispatch<AppDispatch>();
  const [variantId, setVariantId] = useState('');
  const carts = useSelector((state: RootState) => state.cart.carts);

  const addtocart = () => {
    const variant = cake.variants.find((variant) => variant._id === variantId);
    if (!variant) {
      toast({
        title: 'Select Variant',
        description: 'Please select a variant to add to cart',
      });
      return;
    }
    const cartExist = carts.find(
      (cart) => cart.product_id === cake._id && cart.variant._id === variant._id,
    );
    if (cartExist) {
      dispatch(updateCartItem({ id: cartExist._id, type: 'increment' }));
      toast({
        title: 'Already in cart. Incremented quantity',
        description: `${cake.name} - ${variant.name} incremented in cart`,
      });
      return;
    }
    const cart = {
      _id: crypto.randomUUID(),
      product_id: cake._id,
      image: cake.images[0],
      name: cake.name,
      category: cake.category,
      variant,
      price: variant.price,
      discount: cake.discount,
      quantity: 1,
      totalPrice: variant.price,
    };
    dispatch(addCartItem(cart));
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
              key={variant._id}
              variant={'secondary'}
              onClick={() => setVariantId(variantId === variant._id ? '' : variant._id)}
              className={`cursor-pointer ${variant._id === variantId ? 'bg-gray-300 hover:bg-gray-300' : ''}`}
            >
              {variant.name}
              {variant.price && ` - ${variant.price}`} <Taka size={12} />
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
