import { Button } from '@/components/ui/button';
import Gradient from '@/components/ui/gradient';
import { Input } from '@/components/ui/input';
import { TypographyH4, TypographySmall } from '@/components/ui/typography';

const CouponCode = () => {
  return (
    <div>
      <TypographyH4>
        <Gradient>Apply Coupon Code</Gradient>
      </TypographyH4>
      <div className='mt-3 flex w-full md:max-w-[768px]'>
        <Input placeholder='AHMC10' className='w-3/4 rounded-r-none' />
        <Button variant={'default'} className='w-1/4 min-w-fit rounded-l-none'>
          Apply Coupon
        </Button>
      </div>
      <TypographySmall className='mt-2'>Coupon code is applied successfully</TypographySmall>
    </div>
  );
};

export { CouponCode };
