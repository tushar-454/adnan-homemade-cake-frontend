import { TProduct } from '@/api/product';
import CakeCard from '@/components/cakes/cake_card';
import CakesFilter from '@/components/cakes/cake_filter';
import { Container } from '@/components/shared/container';
import { BASE_URL } from '@/constant';

const Cakes = async () => {
  const res: Response = await fetch(`${BASE_URL}/products`, {
    next: {
      revalidate: 3600,
    },
  });
  const cakes: TProduct[] = await res.json();

  return (
    <Container>
      <div className='my-8 flex gap-3'>
        <CakesFilter />
        <div className='grid flex-grow grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3'>
          {cakes && cakes.map((cake) => <CakeCard key={cake.id} product={cake} />)}
        </div>
      </div>
    </Container>
  );
};

export default Cakes;
