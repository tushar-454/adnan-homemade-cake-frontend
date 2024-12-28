import { Carousel } from '@/components/carousel/carousel';
import { Category } from '@/components/category/category';
import { TopSelling } from '@/components/top_selling/top_selling';

const Home = () => {
  return (
    <main className=''>
      <Carousel />
      <Category />
      <TopSelling />
    </main>
  );
};

export default Home;
