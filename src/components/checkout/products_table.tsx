'use client';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { Badge } from '@/components/ui/badge';
import Gradient from '@/components/ui/gradient';
import { TypographyH3, TypographyLarge, TypographyP } from '@/components/ui/typography';
import { RootState } from '@/store/store';
import Image from 'next/image';
import { useSelector } from 'react-redux';

type ProductsTableProps = {
  shipping: number;
  couponDiscount: number;
};

const ProductsTable = ({ shipping, couponDiscount }: ProductsTableProps) => {
  const carts = useSelector((state: RootState) => state.cart.carts);

  return (
    <div className='overflow-x-auto'>
      <Table className='min-w-[1024px] lg:w-full'>
        <TableCaption>Here is your all final product that you ordering now</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>
              <TypographyLarge>Product Details</TypographyLarge>
            </TableHead>
            <TableHead>
              <TypographyLarge>Discount Price</TypographyLarge>
            </TableHead>
            <TableHead>
              <TypographyLarge>Quantity</TypographyLarge>
            </TableHead>
            <TableHead className='text-right'>
              <TypographyLarge>Total Price</TypographyLarge>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {carts?.map((cart) => (
            <TableRow key={cart.id}>
              <TableCell>
                <div className='flex gap-2'>
                  {/* image and variant other details here */}
                  <Image
                    src={cart.image}
                    alt={cart.name}
                    width={50}
                    height={50}
                    className='size-16 rounded-lg object-cover'
                  />
                  <div className='flex flex-col gap-1'>
                    <TypographyP>{cart.name}</TypographyP>
                    <span className='flex flex-wrap items-center gap-1'>
                      <Badge variant={'default'} className='max-w-fit whitespace-nowrap'>
                        {cart.category}
                      </Badge>
                      <Badge variant={'default'} className='max-w-fit whitespace-nowrap'>
                        {cart.variant?.name} - {cart.variant?.price}
                      </Badge>
                    </span>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className='flex flex-col gap-1'>
                  <TypographyLarge>
                    ${cart.price - cart.price * (cart.discount / 100)}
                  </TypographyLarge>
                </div>
              </TableCell>
              <TableCell>
                <TypographyLarge>{cart.quantity}</TypographyLarge>
              </TableCell>
              <TableCell className='text-right'>
                <TypographyH3>
                  <Gradient>
                    $
                    {cart.price * cart.quantity -
                      cart.price * cart.quantity * (cart.discount / 100)}
                  </Gradient>
                </TypographyH3>
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell colSpan={3} className='text-right'>
              <TypographyLarge>Total:</TypographyLarge>
            </TableCell>
            <TableCell colSpan={1} className='text-right'>
              <TypographyLarge>
                +{' '}
                {carts.reduce((acc, cur) => {
                  return (
                    acc + cur.price * cur.quantity - cur.price * cur.quantity * (cur.discount / 100)
                  );
                }, 0)}
              </TypographyLarge>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={3} className='text-right'>
              <TypographyLarge>Discount:</TypographyLarge>
            </TableCell>
            <TableCell colSpan={1} className='text-right'>
              <TypographyLarge>
                -{' '}
                {carts.reduce((acc, cur) => {
                  return acc + cur.price * cur.quantity * (cur.discount / 100);
                }, 0)}
              </TypographyLarge>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={3} className='text-right'>
              <TypographyLarge>Shipping:</TypographyLarge>
            </TableCell>
            <TableCell colSpan={1} className='text-right'>
              <TypographyLarge>+ {shipping}</TypographyLarge>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={3} className='text-right'>
              <TypographyLarge>Coupon Discount:</TypographyLarge>
            </TableCell>
            <TableCell colSpan={1} className='text-right'>
              <TypographyLarge>- {couponDiscount}</TypographyLarge>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={3} className='text-right'>
              <TypographyLarge>Nit Total:</TypographyLarge>
            </TableCell>
            <TableCell colSpan={1} className='text-right'>
              <TypographyLarge>
                +{' '}
                {carts.reduce((acc, cur) => {
                  return (
                    acc + cur.price * cur.quantity - cur.price * cur.quantity * (cur.discount / 100)
                  );
                }, 0) +
                  shipping -
                  couponDiscount}
              </TypographyLarge>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export { ProductsTable };
