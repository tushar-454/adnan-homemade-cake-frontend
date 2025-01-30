import { FormType } from '@/schema/create-product';
import { Trash2 } from 'lucide-react';
import { TextField } from '../generic_form/fields/TextField';
import { Button } from '../ui/button';

type ImageCardProps = {
  index: number;
  onRemove: () => void;
};

const ImageInput = ({ index, onRemove }: ImageCardProps) => {
  return (
    <div className='space-y-6'>
      {/* Image Cards */}
      <div className='rounded-lg bg-neutral-100 p-2'>
        <div className='grid grid-cols-1 gap-2'>
          <TextField<FormType>
            name={`images.${index}.link`}
            label='Image Link'
            placeholder='Enter image link'
          />
        </div>

        <div className='flex items-center justify-end'>
          <Button
            size='sm'
            variant='ghost'
            onClick={onRemove}
            type='button'
            className='transition-colors hover:text-red-500'
          >
            <Trash2 size={18} className='mr-2' />
            Remove image
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ImageInput;
