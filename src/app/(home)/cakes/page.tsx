import { TProductResponse } from '@/api/product';
import CakeCard from '@/components/cakes/cake_card';
import CakesFilter from '@/components/cakes/cake_filter';
import { Container } from '@/components/shared/container';
import { BASE_URL } from '@/constant';

const Cakes = async () => {
  const res: Response = await fetch(`${BASE_URL}/product`, {
    next: {
      revalidate: 600,
    },
  });
  const { data: cakes = [] }: TProductResponse = await res.json();

  return (
    <Container>
      <div className='my-8 flex gap-3'>
        <CakesFilter />
        <div className='grid flex-grow grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3'>
          {cakes &&
            Array.isArray(cakes) &&
            cakes.map((cake) => <CakeCard key={cake._id} product={cake} />)}
        </div>
      </div>
    </Container>
  );
};

export default Cakes;
