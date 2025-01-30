import { TProduct, TProductResponse } from '@/api/product';
import AddToCart from '@/components/cakes_details/add_to_cart';
import { CakesImages } from '@/components/cakes_details/cakes_images';
import { Container } from '@/components/shared/container';
import { InnerHTML } from '@/components/shared/inner_html';
import { Rating } from '@/components/shared/rating';
import { Taka } from '@/components/shared/taka';
import { Badge } from '@/components/ui/badge';
import { BASE_URL } from '@/constant';

type CakeResponse = {
  success: boolean;
  data: TProduct;
};

const CakeDetails = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const res: Response = await fetch(`${BASE_URL}/product/${slug}`, {
    next: {
      revalidate: 600,
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
                <Taka size={24} />
                {cake.price - cake.price * (cake.discount / 100)}
              </span>
              <span className='text-gray-500 line-through'>
                <Taka size={10} />
                {cake.price}
              </span>
            </div>

            <div className='mb-1 flex items-center gap-2'>
              <Rating rating={cake.rating} />
              {cake.rating}
            </div>
            <Badge variant={'destructive'}>{cake.sell_count} - Sells</Badge>
            <p className='my-4 text-gray-700'>
              <InnerHTML content={cake.description} />
            </p>
            <AddToCart cake={cake} />
          </div>
        </div>
      </Container>
    </main>
  );
};

export default CakeDetails;

export async function generateStaticParams() {
  const res: Response = await fetch(`${BASE_URL}/product`);
  const { data: products }: TProductResponse = await res.json();

  return products.map((product) => ({
    id: product.slug,
  }));
}
