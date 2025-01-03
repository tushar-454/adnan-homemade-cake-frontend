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
import Image from 'next/image';

const ProductsTable = () => {
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
          {[{}, {}, {}, {}].map((product, index) => (
            <TableRow key={index}>
              <TableCell>
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
              </TableCell>
              <TableCell>
                <div className='flex flex-col gap-1'>
                  <TypographyLarge>$100</TypographyLarge>
                </div>
              </TableCell>
              <TableCell>
                <TypographyLarge>10</TypographyLarge>
              </TableCell>
              <TableCell className='text-right'>
                <TypographyH3>
                  <Gradient>$200</Gradient>
                </TypographyH3>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductsTable;
