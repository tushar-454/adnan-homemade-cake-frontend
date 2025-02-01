import { Plus, Trash } from 'lucide-react';
import Image from 'next/image';
import { useEffect } from 'react';
import { FormLabel } from '../ui/form';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

type UploadImagesProps = {
  imageObjUrls: string[];
  setImageObjUrls: React.Dispatch<React.SetStateAction<string[]>>;
  images: File[];
  setImages: React.Dispatch<React.SetStateAction<File[]>>;
};

const UploadImages = ({ imageObjUrls, setImageObjUrls, images, setImages }: UploadImagesProps) => {
  const handleDelete = (index: number) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
  };

  useEffect(() => {
    const objUrlImages = images.map((file) => {
      return URL.createObjectURL(file);
    });
    setImageObjUrls(objUrlImages);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images]);

  return (
    <div>
      <FormLabel htmlFor='images'>Upload Images</FormLabel>
      <Input
        id='imagesInput'
        type='file'
        onChange={(e) =>
          setImages(e.target.files ? [...images, ...Array.from(e.target.files)] : [])
        }
        className='hidden'
        multiple
      />
      <div className='flex flex-wrap items-center gap-2'>
        {imageObjUrls.map((objUrl, index) => (
          <div key={index} className='relative'>
            <span className='absolute right-1 top-1 select-none'>
              <Trash
                size={24}
                onClick={() => handleDelete(index)}
                className='cursor-pointer select-none rounded-lg bg-neutral-200 p-1 text-neutral-500 transition-all hover:bg-neutral-300/80'
              />
            </span>
            <Image
              src={objUrl}
              alt='image'
              width={300}
              height={300}
              className='h-20 w-20 select-none rounded-lg object-cover'
            />
          </div>
        ))}
        <Label htmlFor='imagesInput'>
          <Plus
            size={80}
            className='my-2 cursor-pointer rounded-lg bg-neutral-200 p-2 text-neutral-500 transition-all hover:bg-neutral-300/80'
          />
        </Label>
      </div>
    </div>
  );
};

export { UploadImages };
