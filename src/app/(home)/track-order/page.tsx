'use client';

import { useOrderQuery } from '@/api/order';
import { TextField } from '@/components/generic_form/fields/TextField';
import { GenericForm, GenericFormRef } from '@/components/generic_form/generic_form';
import { Container } from '@/components/shared/container';
import { Button } from '@/components/ui/button';
import Gradient from '@/components/ui/gradient';
import { TypographyH2, TypographyH3, TypographyH4, TypographyP } from '@/components/ui/typography';
import { formatDate } from '@/lib/utils';
import { useRef, useState } from 'react';
import { z } from 'zod';

const schema = z.object({
  trackingId: z.string().length(9, {
    message: 'Tracking id should be 9 characters long',
  }),
});

export type FormType = z.infer<typeof schema>;

const TrackOrder = () => {
  const [trackingId, setTrackingId] = useState(0);
  const {
    data: order,
    isLoading,
    isError,
    refetch,
  } = useOrderQuery(trackingId, { skip: trackingId === 0 });
  const formRef = useRef<GenericFormRef<FormType>>(null);
  const initialValues: FormType = {
    trackingId: '',
  };

  const handleSubmit = async (data: FormType | React.FormEvent<HTMLFormElement>) => {
    console.log('form submitted');
    if ('trackingId' in data) {
      setTrackingId(+data.trackingId);
      refetch();
    }
  };

  return (
    <main className='h-screen'>
      <Container>
        <div className='mx-auto w-full space-y-4 pt-8 sm:w-[500px] sm:pt-16'>
          <TypographyH2 className='text-center'>
            <Gradient>Track Order Now</Gradient>
          </TypographyH2>

          <div className='flex justify-center'>
            <GenericForm
              schema={schema}
              initialValues={initialValues}
              onSubmit={handleSubmit}
              ref={formRef}
            >
              <div className='flex'>
                <TextField<FormType>
                  name='trackingId'
                  type='number'
                  placeholder='enter your order tracking id'
                  className='w-full sm:w-[500px]'
                  inputClass='rounded-r-none'
                />
                <Button type='submit' className='rounded-l-none'>
                  Track Order
                </Button>
              </div>
            </GenericForm>
          </div>
          {!isLoading && isError && (
            <TypographyH3>
              <Gradient>No Order Found</Gradient>
            </TypographyH3>
          )}
          {!isLoading && !isError && order && (
            <div className=''>
              <TypographyH3>
                <Gradient>Your Order Details</Gradient>
              </TypographyH3>
              <div className='flex flex-col justify-between gap-5'>
                <div className='tracking-info'>
                  <TypographyP>
                    <strong>Tracking ID:</strong> {trackingId}
                  </TypographyP>
                  <TypographyP>
                    <strong>Status:</strong> {order.data.status}
                  </TypographyP>
                  <TypographyP>
                    <strong>Created At:</strong> {formatDate(order.data.createdAt)}
                  </TypographyP>
                  <TypographyP>
                    <strong>Updated At:</strong> {formatDate(order.data.updatedAt)}
                  </TypographyP>
                </div>

                <TypographyH4>Order Items:</TypographyH4>
                <ul className='order-items'>
                  {order.data.line_items.map((item, index) => (
                    <li key={index} className='order-item'>
                      <p>
                        {item.name} * {item.quantity}, {item.variant} - {item.price}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </Container>
    </main>
  );
};

export default TrackOrder;
