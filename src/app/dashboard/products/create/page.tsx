'use client';

import { useCategoryQuery } from '@/api/category';
import { TProductError, useCreateProductMutation } from '@/api/product';
import ImageInput from '@/components/dashboard/image_input';
import VariantInput from '@/components/dashboard/variant_input';
import { FieldArray } from '@/components/generic_form/field_array';
import { ResetButton } from '@/components/generic_form/fields/ResetButton';
import { SelectField } from '@/components/generic_form/fields/SelectField';
import { SubmitButton } from '@/components/generic_form/fields/SubmitButton';
import { TextAreaField } from '@/components/generic_form/fields/TextAreaField';
import { TextField } from '@/components/generic_form/fields/TextField';
import { GenericForm, GenericFormRef } from '@/components/generic_form/generic_form';
import { Button } from '@/components/ui/button';
import { TypographyH4 } from '@/components/ui/typography';
import { useToast } from '@/hooks/use-toast';
import { FormType, schema } from '@/schema/create-product';
import { PlusCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

const initialValues: FormType = {
  name: '',
  description: '',
  price: 0,
  discount: 0,
  images: [
    {
      link: '',
    },
  ],
  category: '',
  variants: [
    {
      name: '',
      price: 0,
    },
  ],
};

const ProductCreate = () => {
  const router = useRouter();
  const { toast } = useToast();
  const { data: { data: categories } = {} } = useCategoryQuery();
  const [createProduct] = useCreateProductMutation();
  const formRef = useRef<GenericFormRef<FormType>>(null);

  const categoryOptions = categories?.map((category) => ({
    value: category.name,
    text: category.name,
  }));

  const handleSubmit = async (formData: FormType | React.FormEvent<HTMLFormElement>) => {
    const { images: imagesArr } = formData as FormType;
    const images = imagesArr.map((image) => image.link);
    const result = await createProduct({
      ...formData,
      images,
    });

    if ('error' in result) {
      const error = result.error as TProductError;
      if (error.status === 403) {
        toast({
          title: 'You are not authorized. Token expired',
          description: 'Please login again.',
        });
      } else if (error.status === 400 && 'errors' in error.data) {
        toast({
          title: 'You have missed some fields',
          description: `${error.data.errors.map((err) => err.field).join(', ')} are required`,
        });
      }
    } else {
      const { data } = result;
      if (data.success) {
        toast({
          title: 'Cake created successfully',
          description: 'You have successfully created a new cake',
        });
        formRef.current?.reset();
        router.push('/cakes/' + data.data.slug);
      }
    }
  };

  return (
    <div className='p-4'>
      <TypographyH4 className='mb-5'>Create a new cake</TypographyH4>
      <GenericForm
        schema={schema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
        ref={formRef}
      >
        <div className='space-y-2'>
          <TextField name='name' label='Name' />
          <TextAreaField name='description' label='Description' autoResize />
          <TextField name='price' label='Price' type='number' />
          <TextField name='discount' label='Discount' type='number' />
          <SelectField<FormType> name='category' label='Category' options={categoryOptions || []} />
          <FieldArray<FormType> name='images'>
            {({ fields, append, remove }) => (
              <div className='space-y-2'>
                {/* Image Cards */}
                {fields.map((field, index) => (
                  <ImageInput key={field.id} index={index} onRemove={() => remove(index)} />
                ))}
                {/* Add Image Button */}
                <div className='flex items-center justify-end'>
                  <Button
                    onClick={() =>
                      append({
                        link: '',
                      })
                    }
                    type='button'
                    variant='outline'
                  >
                    <div className='flex items-center gap-2'>
                      <PlusCircle className='h-6 w-6' />
                      <span>Add Image</span>
                    </div>
                  </Button>
                </div>
              </div>
            )}
          </FieldArray>
          <FieldArray<FormType> name='variants'>
            {({ fields, append, remove }) => (
              <div className='space-y-2'>
                {/* Variant Cards */}
                {fields.map((field, index) => (
                  <VariantInput key={field.id} index={index} onRemove={() => remove(index)} />
                ))}
                {/* Add Variant Button */}
                <div className='flex items-center justify-end'>
                  <Button
                    onClick={() =>
                      append({
                        name: '',
                        price: 0,
                      })
                    }
                    type='button'
                    variant='outline'
                  >
                    <div className='flex items-center gap-2'>
                      <PlusCircle className='h-6 w-6' />
                      <span>Add Variant</span>
                    </div>
                  </Button>
                </div>
              </div>
            )}
          </FieldArray>
          <div className='flex items-center gap-2 pt-5'>
            <SubmitButton width='auto' label='Create Cake' />
            <ResetButton />
          </div>
        </div>
      </GenericForm>
    </div>
  );
};

export default ProductCreate;
