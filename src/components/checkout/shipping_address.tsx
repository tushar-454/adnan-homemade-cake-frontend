'use client';

// import { DISTRICTS_KEY_TYPE, DIVISIONS_KEY_TYPE } from '@/constant/location';
import { useToast } from '@/hooks/use-toast';
import { clearAddress, updateOrderAddress } from '@/store/features/order';
import { AppDispatch } from '@/store/store';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { z } from 'zod';
import { ResetButton } from '../generic_form/fields/ResetButton';
import { SubmitButton } from '../generic_form/fields/SubmitButton';
import { TextAreaField } from '../generic_form/fields/TextAreaField';
import { TextField } from '../generic_form/fields/TextField';
import { GenericForm, GenericFormRef } from '../generic_form/generic_form';
import Gradient from '../ui/gradient';
import { TypographyH4 } from '../ui/typography';

const FormSchema = z.object({
  name: z.string().nonempty(),
  email: z.string().email(),
  phone: z.string().nonempty(),
  division: z.string().nonempty(),
  district: z.string().nonempty(),
  sub_district: z.string().nonempty(),
  address: z.string().nonempty(),
});

type FormType = z.infer<typeof FormSchema>;

const initialValues: FormType = {
  name: '',
  email: '',
  phone: '',
  division: '',
  district: '',
  sub_district: '',
  address: '',
};

const ShippingAddress = () => {
  const { toast } = useToast();
  // const [division, setDivision] = useState<DIVISIONS_KEY_TYPE>('10');
  // const [district, setDistrict] = useState<DISTRICTS_KEY_TYPE>('1');
  const dispatch = useDispatch<AppDispatch>();
  const formRef = useRef<GenericFormRef<FormType>>(null);

  const handleSubmit = (data: FormType | React.FormEvent<HTMLFormElement>) => {
    dispatch(updateOrderAddress(data));
    toast({
      title: 'Success',
      description: 'Shipping address saved successfully',
    });
    window.scrollTo(0, 0);
  };

  return (
    <div className='space-y-2'>
      <TypographyH4>
        <Gradient>Shipping Address</Gradient>
      </TypographyH4>
      <GenericForm
        schema={FormSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
        ref={formRef}
      >
        <div className='space-y-2'>
          <TextField
            name='name'
            label='Full Name'
            placeholder='Enter your full name here...'
            required
          />
          <TextField name='email' label='Email' placeholder=' Enter your email here... ' required />
          <TextField
            name='phone'
            label='Phone Number'
            placeholder=' Enter your phone number here... '
            required
          />
          <div className='grid grid-cols-1 gap-2 md:grid-cols-3'>
            <TextField
              name='division'
              label='Division'
              placeholder=' Enter your division here... '
              required
            />
            <TextField
              name='district'
              label='District'
              placeholder=' Enter your district here... '
              required
            />
            <TextField
              name='sub_district'
              label='Upazilla'
              placeholder=' Enter your upazilla here... '
              required
            />
          </div>
          <TextAreaField
            name='address'
            label='Full Address'
            placeholder=' Enter your full address here... '
            autoResize
            required
          />
          <div className='flex items-center gap-2 pt-5'>
            <SubmitButton width='auto' />
            <ResetButton cFunc={() => dispatch(clearAddress())} />
          </div>
        </div>
      </GenericForm>
    </div>
  );
};

export { ShippingAddress };
