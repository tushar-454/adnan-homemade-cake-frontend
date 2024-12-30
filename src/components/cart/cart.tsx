import { Plus } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import Gradient from '../ui/gradient';
import { Separator } from '../ui/separator';
import { TypographyH3, TypographyLarge, TypographyP } from '../ui/typography';

type CartProps = {
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
};

const Cart = ({ cartOpen, setCartOpen }: CartProps) => {
  return (
    <>
      <span
        className={`fixed left-0 top-0 z-[999999999] h-full w-full bg-black/50 ${cartOpen ? 'visible opacity-100 backdrop-blur-sm' : 'invisible opacity-0'} transition-all duration-500`}
        onClick={() => setCartOpen(false)}
      ></span>
      <div
        className={`fixed top-0 z-[999999999] h-full w-full bg-white p-5 transition-all duration-300 sm:w-[640px] ${cartOpen ? 'right-0' : '-right-full'}`}
      >
        {/* cart wrapper here  */}
        <div className='flex h-full flex-col justify-between'>
          {/* head and content here  */}
          <div>
            {/* cart header */}
            <div className='flex items-center justify-between gap-2'>
              <TypographyH3>
                <Gradient>Cart</Gradient>
              </TypographyH3>
              <Button variant={'destructive'} onClick={() => setCartOpen(false)}>
                Close
              </Button>
            </div>
            <Separator className='my-3' />
            {/* cart content here  */}
            <div className='max-h-[calc(100vh-10rem)] overflow-y-auto'>
              {[{}, {}, {}, {}].map((item, index) => (
                <div
                  key={index}
                  className='mt-5 flex flex-col items-center justify-between gap-2 p-1'
                >
                  <div className='flex gap-2'>
                    {/* image and variant other details here */}
                    <Image
                      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmLzTSljaTNyI0kNe9vMOk13KnsVw0l8w05vzTAAeYu2ejKacj1G3mAxtsZXAV2AQvr-I&usqp=CAU'
                      alt='product'
                      width={50}
                      height={50}
                      className='size-16 rounded-lg object-cover'
                    />
                    <div className='flex flex-col gap-1'>
                      <TypographyP>
                        Dominican Republic ; Black Forest cake, often known as Black Forest
                      </TypographyP>
                      <span className='flex flex-wrap items-center gap-1'>
                        <Badge variant={'default'} className='max-w-fit whitespace-nowrap'>
                          Variant
                        </Badge>
                        <Badge variant={'default'} className='max-w-fit whitespace-nowrap'>
                          1 Pound
                        </Badge>
                        <Badge variant={'default'} className='max-w-fit whitespace-nowrap'>
                          Vanilla
                        </Badge>
                      </span>
                    </div>
                  </div>
                  {/* down section 4 items */}
                  <div className='flex w-full flex-wrap items-center justify-between gap-2 p-1'>
                    {/* price and discount  */}
                    <div className='flex flex-col gap-1'>
                      <TypographyLarge>$100</TypographyLarge>
                      <Badge variant={'destructive'} className='max-w-fit whitespace-nowrap'>
                        9% Off
                      </Badge>
                    </div>
                    {/* total price  */}
                    <div>
                      <TypographyH3>
                        <Gradient>$200</Gradient>
                      </TypographyH3>
                    </div>
                    {/* quantity and remove button  */}
                    <div className='flex max-w-[150px] items-center px-2'>
                      <div className='flex w-full items-center rounded-lg border'>
                        <span className='grid h-auto w-fit flex-grow cursor-pointer place-content-center px-2 text-lg hover:bg-black/10'>
                          -
                        </span>
                        <span className='grid h-auto w-fit flex-grow place-content-center border-x px-2 text-lg'>
                          1
                        </span>
                        <span className='grid h-auto w-fit flex-grow cursor-pointer place-content-center px-2 text-lg hover:bg-black/10'>
                          +
                        </span>
                      </div>
                    </div>
                    <Button variant={'destructive'} className='size-10'>
                      <Plus className='rotate-45' />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* cart footer here */}
          <Button variant={'default'} className='flex-end w-full'>
            Checkout
          </Button>
        </div>
      </div>
    </>
  );
};

export default Cart;
