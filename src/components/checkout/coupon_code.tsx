import { TCoupon } from '@/api/Coupon';
import { Button } from '@/components/ui/button';
import Gradient from '@/components/ui/gradient';
import { Input } from '@/components/ui/input';
import { TypographyH4, TypographySmall } from '@/components/ui/typography';
import { BASE_URL2 } from '@/constant';
import { updateOrderDiscount } from '@/store/features/order';
import { AppDispatch, RootState } from '@/store/store';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const CouponCode = () => {
  const [code, setCode] = useState('');
  const [placeholder, setPlaceholder] = useState('');
  const order = useSelector((state: RootState) => state.order);
  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (code === '') return setPlaceholder('Enter coupon');
    try {
      const res: Response = await fetch(`${BASE_URL2}/coupon/${code}`);
      const data = await res.json();
      if (data.success === false) return setPlaceholder(data.message);
      if (data.success && data.data) {
        const { discount, quantity, startAt, expireAt, type } = data.data as TCoupon;

        if (startAt > Date.now()) return setPlaceholder('Coupon not valid yet.');
        if (expireAt < Date.now()) return setPlaceholder('Coupon is Expire.');
        if (quantity === 0) return setPlaceholder('Coupon quantity finished');
        dispatch(updateOrderDiscount({ discount, type }));
        setPlaceholder('Coupon applied');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <TypographyH4>
        <Gradient>Apply Coupon Code</Gradient>
      </TypographyH4>

      <form onSubmit={onSubmit} className='mt-3 flex w-full md:max-w-[768px]'>
        <Input
          placeholder='AHMC10'
          className='w-3/4 rounded-r-none'
          value={code}
          onChange={(e) => setCode(e.target.value)}
          disabled={order.discount !== 0}
        />
        {order.discount === 0 ? (
          <Button type='submit' variant={'default'} className='w-1/4 min-w-fit rounded-l-none'>
            Apply Coupon
          </Button>
        ) : (
          <Button
            variant={'destructive'}
            className='w-1/4 min-w-fit rounded-l-none'
            onClick={() => {
              setCode('');
              dispatch(updateOrderDiscount({ type: 'flat', discount: 0 }));
            }}
          >
            Remove Coupon
          </Button>
        )}
      </form>

      {placeholder && (
        <TypographySmall
          className={`mt-2 ${order.discount ? 'text-muted-foreground' : 'text-red-500'}`}
        >
          {placeholder}
        </TypographySmall>
      )}
    </div>
  );
};

export { CouponCode };
