import { TProduct } from '@/api/product';
import AddToCart from '@/components/cakes_details/add_to_cart';
import { CakesImages } from '@/components/cakes_details/CakesImages';
import { Container } from '@/components/shared/container';
import { Rating } from '@/components/shared/rating';
import { Badge } from '@/components/ui/badge';
import { BASE_URL, BASE_URL2 } from '@/constant';

type CakeResponse = {
  success: boolean;
  data: TProduct;
};

const CakeDetails = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const res: Response = await fetch(`${BASE_URL2}/product/${slug}`, {
    next: {
      revalidate: 3600,
    },
  });
  const { data: cake }: CakeResponse = await res.json();

  return (
    <main>
      <Container>
        <div className='my-8 flex flex-wrap'>
          {/*  Product Images  */}
          <CakesImages images={cake.images} />

          {/*  Product Details  */}
          <div className='w-full px-4 md:w-1/2'>
            <h2 className='mb-2 text-3xl font-bold'>{cake.name}</h2>
            <Badge variant={'secondary'}>{cake.category}</Badge>
            <div className='my-2'>
              <span className='mr-2 text-2xl font-bold'>
                ${cake.price - cake.price * (cake.discount / 100)}
              </span>
              <span className='text-gray-500 line-through'>${cake.price}</span>
            </div>

            <div className='mb-1 flex items-center gap-2'>
              <Rating rating={cake.rating} />
              {cake.rating}
            </div>
            <Badge variant={'destructive'}>{cake.sell_count} - Sells</Badge>
            <p className='my-4 text-gray-700'>{cake.description}</p>

            <AddToCart cake={cake} />
          </div>
        </div>
      </Container>
    </main>
  );
};

export default CakeDetails;

export async function generateStaticParams() {
  const res: Response = await fetch(`${BASE_URL}/products`);
  const products: TProduct[] = await res.json();

  return products.map((product) => ({
    id: product._id,
  }));
}
