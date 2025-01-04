import Gradient from '../ui/gradient';
import { Input } from '../ui/input';
import { TypographyH4 } from '../ui/typography';

const PaymentInformation = () => {
  return (
    <div>
      <TypographyH4 className=''>
        <Gradient>Payment Information</Gradient>
      </TypographyH4>
      <div className='mt-3 flex flex-col gap-3 md:flex-row'>
        <Input placeholder='Card Number' />
        <Input placeholder='Name on Card' />
      </div>
      <div className='mt-3 flex flex-col gap-3 md:flex-row'>
        <Input placeholder='Expiry Date' />
        <Input placeholder='CVV' />
      </div>
    </div>
  );
};

export { PaymentInformation };
