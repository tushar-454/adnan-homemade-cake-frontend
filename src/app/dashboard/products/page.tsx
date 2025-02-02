'use client';

import { useGetProductsQuery } from '@/api/product';
import TableSkeleton from '@/components/dashboard/table_skeleton';
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
  console.log(cakes);
  return (
    <div className='p-4'>
      <TypographyH4 className='mb-5'>Products</TypographyH4>
      <div className='w-full overflow-hidden'>
        {isLoading && <TableSkeleton />}
        {isError && (
          <TypographyP className='text-center text-red-500'>
            Something is wrong while fetching products
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
              {cakes?.map((content, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{content.name}</TableCell>
                  <TableCell>{content.price}</TableCell>
                  <TableCell>{content.discount}</TableCell>
                  <TableCell>{content.rating}</TableCell>
                  <TableCell>{content.sell_count}</TableCell>
                  <TableCell>
                    <Switch checked={content.is_featured} />
                  </TableCell>
                  <TableCell>
                    <Switch checked={content.is_upcoming} />
                  </TableCell>
                  <TableCell>
                    <Switch checked={content.is_deleted} />
                  </TableCell>
                  <TableCell>Actions</TableCell>
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
