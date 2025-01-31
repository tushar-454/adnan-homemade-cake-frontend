import { TCategory } from '@/api/category';
import Image from 'next/image';
import { TypographyP } from '../ui/typography';

const CategoryCard = ({ category }: { category: TCategory }) => {
  return (
    <>
      <Image
        src={
          category.photo ||
          'https://thumbs.dreamstime.com/b/category-word-purple-category-word-purple-background-273163166.jpg'
        }
        alt=''
        width={150}
        height={150}
        className='h-24 min-w-24 max-w-24 select-none rounded-full object-cover'
      />
      <TypographyP className='whitespace-nowrap text-center'>
        {category.name || 'Category Name'}
      </TypographyP>
    </>
  );
};

export { CategoryCard };
