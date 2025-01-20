import { TCouponRes } from '@/api/Coupon';
import { Button } from '@/components/ui/button';
import Gradient from '@/components/ui/gradient';
import { Input } from '@/components/ui/input';
import { TypographyH4, TypographySmall } from '@/components/ui/typography';
import { BASE_URL2 } from '@/constant';
import React, { useState } from 'react';

type CouponCodeProps = {
  couponObj: {
    type: string;
    discount: number;
  };
  setCouponObj: React.Dispatch<
    React.SetStateAction<{
      type: string;
      discount: number;
    }>
  >;
};

const CouponCode = ({ couponObj, setCouponObj }: CouponCodeProps) => {
  const [code, setCode] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const applyCoupon = async (e: React.FormEvent<HTMLFormElement>, code: string) => {
    e.preventDefault();
    setError(false);
    if (!code) {
      setError(true);
      setErrorMessage('Type coupon code');
      return;
    }
    const res: Response = await fetch(`${BASE_URL2}/coupon/${code}`);
    const { success, data }: TCouponRes = await res.json();
    if (!success && !data) {
      setError(true);
      setErrorMessage('Invalid coupon code');
      return;
    }
    if (success && data && data.type === 'flat' && data.quantity === 0) {
      setError(true);
      setErrorMessage('Coupon code has been used');
      return;
    }
    if (success && data && data.type === 'percentage' && data.quantity === 0) {
      setError(true);
      setErrorMessage('Coupon quantity has been ended');
      return;
    }
    if (success && data && data.startAt > Date.now()) {
      setError(true);
      setErrorMessage('Coupon is not valid for now');
      return;
    }
    if (success && data && data.expireAt < Date.now()) {
      setError(true);
      setErrorMessage('Coupon has been expired');
      return;
    }
    if (success && data) {
      setError(false);
      setCouponObj({
        type: data.type,
        discount: data.discount,
      });
    }
  };

  return (
    <div>
      <TypographyH4>
        <Gradient>Apply Coupon Code</Gradient>
      </TypographyH4>

      <form onSubmit={(e) => applyCoupon(e, code)} className='mt-3 flex w-full md:max-w-[768px]'>
        <Input
          placeholder='AHMC10'
          className='w-3/4 rounded-r-none'
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        {couponObj.discount === 0 ? (
          <Button
            type='submit'
            variant={'default'}
            className='w-1/4 min-w-fit rounded-l-none'
            // onClick={() => applyCoupon(code)}
          >
            Apply Coupon
          </Button>
        ) : (
          <Button
            variant={'destructive'}
            className='w-1/4 min-w-fit rounded-l-none'
            onClick={() => {
              setCouponObj({
                type: '',
                discount: 0,
              });
              setCode('');
            }}
          >
            Remove Coupon
          </Button>
        )}
      </form>

      {error && <TypographySmall className='mt-2 text-red-500'>{errorMessage}</TypographySmall>}
    </div>
  );
};

export { CouponCode };
