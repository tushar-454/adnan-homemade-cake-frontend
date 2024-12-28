import { Carousel } from '@/components/carousel/carousel';
import { Category } from '@/components/category/category';
import { Featured } from '@/components/featured/featured';
import { Reviews } from '@/components/reviews/reviews';
import { TopSelling } from '@/components/top_selling/top_selling';
import { Upcoming } from '@/components/upcoming/upcoming';

const Home = () => {
  return (
    <main className=''>
      <Carousel />
      <Category />
      <TopSelling />
      <span className='my-24 block'></span>
      <Featured />
      <span className='my-24 block'></span>
      <Upcoming />
      <span className='my-24 block'></span>
      <Reviews />
    </main>
  );
};

export default Home;
