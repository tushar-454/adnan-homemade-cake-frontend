import { TProduct } from '@/api/product';
import { CakesImages } from '@/components/cakes_details/CakesImages';
import { Container } from '@/components/shared/container';
import { Rating } from '@/components/shared/rating';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BASE_URL } from '@/constant';
import { ShoppingCart } from 'lucide-react';

const CakeDetails = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const res: Response = await fetch(`${BASE_URL}/products/${slug}`, {
    next: {
      revalidate: 3600,
    },
  });
  const cake: TProduct = await res.json();

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

            <div className='mb-6'>
              <h3 className='mb-2 text-lg font-semibold'>Variants:</h3>
              <div className='flex space-x-2'>
                {cake.variants.map((variant) => (
                  <Badge key={variant.id} variant={'secondary'}>
                    {variant.name}
                    {variant.price && ` - $${variant.price}`}
                  </Badge>
                ))}
              </div>
            </div>

            <div className='mb-6 flex space-x-4'>
              <Button variant={'default'}>
                <span className='flex items-center gap-2'>
                  <ShoppingCart />
                  Add to Cart
                </span>
              </Button>
            </div>
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
    id: product.id,
  }));
}
