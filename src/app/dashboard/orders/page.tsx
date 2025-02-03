'use client';

import { useOrdersQuery } from '@/api/order';
import TableSkeleton from '@/components/dashboard/table_skeleton';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { TypographyH4, TypographyP } from '@/components/ui/typography';
import { capitalizeFirstLetter, formatDate } from '@/lib/utils';
import { useEffect } from 'react';

const tableHeadData = [
  'No',
  'Tracking ID',
  'Customer Name',
  'Phone',
  'Email',
  'Order Date',
  'Items',
  'Total Price',
  'Discount',
  'Shipping Address',
  'Order Status',
  'Order ID',
];

const Orders = () => {
  const { data: { data: orders } = {}, isError, isLoading, refetch } = useOrdersQuery();

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <div className='p-4'>
      <TypographyH4 className='mb-5'>Orders</TypographyH4>
      <div className='w-full overflow-hidden'>
        {isLoading && <TableSkeleton />}
        {isError && (
          <TypographyP className='text-center text-red-500'>
            Something is wrong while fetching orders. Maybe your token is expired. Please login
            again.
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
              {orders?.map((order, index) => (
                <TableRow
                  key={index}
                  className={`hover:bg-gray-200 ${index % 2 === 0 ? 'bg-gray-100' : ''}`}
                >
                  <TableCell className='whitespace-nowrap p-4'>{++index}</TableCell>
                  <TableCell className='whitespace-nowrap p-4'>{order.tracking_id}</TableCell>
                  <TableCell className='whitespace-nowrap p-4'>{order.name}</TableCell>
                  <TableCell className='whitespace-nowrap p-4'>
                    <a href={`tel:${order.phone}`}>{order.phone}</a>
                  </TableCell>
                  <TableCell className='whitespace-nowrap p-4'>
                    <a href={`mailto:${order.email}`}>{order.email.split('@')[0]}</a>
                  </TableCell>
                  <TableCell className='whitespace-nowrap p-4'>
                    {formatDate(order.createdAt)}
                  </TableCell>
                  <TableCell className='whitespace-nowrap p-4'>{order.line_items.length}</TableCell>
                  <TableCell className='whitespace-nowrap p-4'>{order.price}</TableCell>
                  <TableCell className='whitespace-nowrap p-4'>{order.discount}</TableCell>
                  <TableCell className='whitespace-nowrap p-4'>{`${order.address}, ${order.district} - ${order.division}`}</TableCell>
                  <TableCell>
                    <Select>
                      <SelectTrigger className='w-[180px]'>
                        <SelectValue placeholder={capitalizeFirstLetter(order.status)} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='cancelled'>Cancelled</SelectItem>
                        <SelectItem value='pending'>Pending</SelectItem>
                        <SelectItem value='confirm'>Confirm</SelectItem>
                        <SelectItem value='cooking'>Cooking</SelectItem>
                        <SelectItem value='delivered'>Delivered</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell className='whitespace-nowrap p-4'>{order.tracking_id}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  );
};

export default Orders;
