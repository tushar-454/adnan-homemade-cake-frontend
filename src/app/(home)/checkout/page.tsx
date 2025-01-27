'use client';
import { CouponCode } from '@/components/checkout/coupon_code';
import { PaymentInformation } from '@/components/checkout/payment_information';
import { ProductsTable } from '@/components/checkout/products_table';
import { ShippingAddress } from '@/components/checkout/shipping_address';
import { Container } from '@/components/shared/container';
import { Button } from '@/components/ui/button';
import Gradient from '@/components/ui/gradient';
import { TypographyH3 } from '@/components/ui/typography';
import { BASE_URL } from '@/constant';
import { useToast } from '@/hooks/use-toast';
import { getDataSessionStorage } from '@/lib/utils';
import { clearCart } from '@/store/features/cart';
import { AppDispatch, RootState } from '@/store/store';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export type TCouponObj = {
  type: string;
  discount: number;
};

const Checkout = () => {
  const { toast } = useToast();
  const router = useRouter();
  const order = useSelector((state: RootState) => state.order);
  const dispatch = useDispatch<AppDispatch>();

  const handleOrder = async () => {
    try {
      const res = await fetch(`${BASE_URL}/order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(order),
      });

      const data = await res.json();
      if (data.success) {
        toast({
          title: 'Order Placed',
          description: 'Your order has been placed successfully',
        });
        router.push('/');
        dispatch(clearCart());
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (getDataSessionStorage('carts')?.length === 0) {
      toast({
        title: 'Cart is Empty',
        description: 'Please add some products to cart',
      });
      router.push('/cakes');
    }
  }, [toast, router]);

  return (
    <main>
      <Container>
        <TypographyH3 className='mt-3'>
          <Gradient>Checkout</Gradient>
        </TypographyH3>
        {/* main wrapper  */}
        <div className='my-8'>
          <ProductsTable />
          <div className='mx-auto mt-10 w-full space-y-10 md:max-w-[768px]'>
            <CouponCode />
            <ShippingAddress />
            <PaymentInformation />
            <Button variant={'default'} className='mx-auto max-w-fit' onClick={handleOrder}>
              Place Order
            </Button>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Checkout;
