'use client';

import { useGetProductsQuery } from '@/api/product';
import TableSkeleton from '@/components/dashboard/table_skeleton';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { TypographyH4, TypographyP } from '@/components/ui/typography';
import Link from 'next/link';

const tableHeadData = [
  'No',
  'Name',
  'Price',
  'Discount',
  'Rating',
  'Sells',
  'Featured',
  'Upcoming',
  'Deleted',
  'Actions',
];

const Products = () => {
  const { data: { data: cakes } = {}, isError, isLoading } = useGetProductsQuery();

  return (
    <div className='p-4'>
      <TypographyH4 className='mb-5'>Products</TypographyH4>
      <div className='w-full overflow-hidden'>
        {isLoading && <TableSkeleton />}
        {isError && (
          <TypographyP className='text-center text-red-500'>
            Something is wrong while fetching products. Maybe your token is expired. Please login
            again.
          </TypographyP>
        )}
        {!isLoading && !isError && (
          <Table className='min-w-[1024px] overflow-x-auto'>
            <TableHeader>
              <TableRow>
                {tableHeadData?.map((head, index) => <TableHead key={index}>{head}</TableHead>)}
              </TableRow>
            </TableHeader>
            <TableBody>
              {cakes?.map((cake, index) => (
                <TableRow key={index}>
                  <TableCell className='whitespace-nowrap p-4'>{index + 1}</TableCell>
                  <TableCell className='whitespace-nowrap p-4'>
                    <Link href={`/cakes/${cake.slug}`} className='hover:underline'>
                      {cake.name}
                    </Link>
                  </TableCell>
                  <TableCell className='whitespace-nowrap p-4'>{cake.price}</TableCell>
                  <TableCell className='whitespace-nowrap p-4'>{cake.discount}</TableCell>
                  <TableCell className='whitespace-nowrap p-4'>{cake.rating}</TableCell>
                  <TableCell className='whitespace-nowrap p-4'>{cake.sell_count}</TableCell>
                  <TableCell className='whitespace-nowrap p-4'>
                    <Switch checked={cake.is_featured} />
                  </TableCell>
                  <TableCell className='whitespace-nowrap p-4'>
                    <Switch checked={cake.is_upcoming} />
                  </TableCell>
                  <TableCell className='whitespace-nowrap p-4'>
                    <Switch checked={cake.is_deleted} />
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

export default Products;
