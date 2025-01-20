'use client';
import { CouponCode } from '@/components/checkout/coupon_code';
import { PaymentInformation } from '@/components/checkout/payment_information';
import { ProductsTable } from '@/components/checkout/products_table';
import { ShippingAddress } from '@/components/checkout/shipping_address';
import { Container } from '@/components/shared/container';
import { Button } from '@/components/ui/button';
import Gradient from '@/components/ui/gradient';
import { TypographyH3 } from '@/components/ui/typography';
import { useToast } from '@/hooks/use-toast';
import { getDataSessionStorage } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Checkout = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [shipping, setShipping] = useState(0);
  const [couponObj, setCouponObj] = useState({
    type: '',
    discount: 0,
  });

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
          <ProductsTable shipping={shipping} couponObj={couponObj} />
          <div className='mx-auto mt-10 w-full space-y-10 md:max-w-[768px]'>
            <CouponCode couponObj={couponObj} setCouponObj={setCouponObj} />
            <ShippingAddress setShipping={setShipping} />
            <PaymentInformation />
            <Button variant={'default'} className='mx-auto max-w-fit'>
              Place Order
            </Button>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Checkout;
