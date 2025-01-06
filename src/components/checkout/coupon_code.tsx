import { Button } from '@/components/ui/button';
import Gradient from '@/components/ui/gradient';
import { Input } from '@/components/ui/input';
import { TypographyH4, TypographySmall } from '@/components/ui/typography';
import React, { useState } from 'react';

type CouponCodeProps = {
  couponDiscount: number;
  setCouponDiscount: React.Dispatch<React.SetStateAction<number>>;
};

const CouponCode = ({ couponDiscount, setCouponDiscount }: CouponCodeProps) => {
  const [coupon, setCoupon] = useState('');

  const applyCoupon = (coupon: string) => {
    if (coupon === 'FREE') {
      setCouponDiscount(100);
    }
  };

  return (
    <div>
      <TypographyH4>
        <Gradient>Apply Coupon Code</Gradient>
      </TypographyH4>
      <div className='mt-3 flex w-full md:max-w-[768px]'>
        <Input
          placeholder='AHMC10'
          className='w-3/4 rounded-r-none'
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
        />
        {couponDiscount === 0 ? (
          <Button
            variant={'default'}
            className='w-1/4 min-w-fit rounded-l-none'
            onClick={() => applyCoupon(coupon)}
          >
            Apply Coupon
          </Button>
        ) : (
          <Button
            variant={'destructive'}
            className='w-1/4 min-w-fit rounded-l-none'
            onClick={() => {
              setCouponDiscount(0);
              setCoupon('');
            }}
          >
            Remove Coupon
          </Button>
        )}
      </div>
      <TypographySmall className='mt-2'>Coupon code is applied successfully</TypographySmall>
    </div>
  );
};

export { CouponCode };
