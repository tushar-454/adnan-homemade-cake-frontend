'use client';

import { useGetCouponsQuery } from '@/api/Coupon';
import TableSkeleton from '@/components/dashboard/table_skeleton';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { TypographyH4, TypographyP } from '@/components/ui/typography';
import { formatDate } from '@/lib/utils';
import { useEffect } from 'react';

const tableHeadData = [
  'No',
  'Code',
  'Type',
  'Discount',
  'Quantity',
  'Minimum Amount',
  'Start Date',
  'Expiry Date',
  'Actions',
];

const Coupons = () => {
  const { data: { data: coupons } = {}, isError, isLoading, refetch } = useGetCouponsQuery();

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <div className='p-4'>
      <TypographyH4 className='mb-5'>Coupons</TypographyH4>
      <div className='w-full overflow-hidden'>
        {isLoading && <TableSkeleton />}
        {isError && (
          <TypographyP className='text-center text-red-500'>
            Something is wrong while fetching coupons
          </TypographyP>
        )}
        {!isLoading && !isError && (
          <Table className='min-w-[1024px] overflow-x-auto'>
            <TableHeader>
              <TableRow>
                {tableHeadData?.map((head, index) => (
                  <TableHead key={index} className='whitespace-nowrap'>
                    {head}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {coupons?.map((coupon, index) => (
                <TableRow key={index}>
                  <TableCell className='whitespace-nowrap p-4'>{index + 1}</TableCell>
                  <TableCell className='whitespace-nowrap p-4'>{coupon.code}</TableCell>
                  <TableCell className='whitespace-nowrap p-4'>{coupon.type}</TableCell>
                  <TableCell className='whitespace-nowrap p-4'>{coupon.discount}</TableCell>
                  <TableCell className='whitespace-nowrap p-4'>
                    {coupon.quantity === null ? 'Unlimited' : coupon.quantity}
                  </TableCell>
                  <TableCell className='whitespace-nowrap p-4'>{coupon.minprice || 0}</TableCell>
                  <TableCell className='whitespace-nowrap p-4'>
                    {formatDate(coupon.startAt)}
                  </TableCell>
                  <TableCell className='whitespace-nowrap p-4'>
                    {formatDate(coupon.expireAt)}
                  </TableCell>
                  <TableCell className='whitespace-nowrap p-4'>
                    <Badge className='mr-2 cursor-pointer'>Edit</Badge>
                    <Badge variant={'destructive'} className='cursor-pointer'>
                      Delete
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  );
};

export default Coupons;
