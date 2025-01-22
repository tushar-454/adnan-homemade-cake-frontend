'use client';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import {
  DISTRICTS,
  DISTRICTS_KEY_TYPE,
  DIVISIONS,
  DIVISIONS_KEY_TYPE,
  UPAZILLAS,
} from '@/constant/location';
import { useState } from 'react';
import Gradient from '../ui/gradient';
import { Input } from '../ui/input';
import { TypographyH4 } from '../ui/typography';

const ShippingAddress = () => {
  const [division, setDivision] = useState<DIVISIONS_KEY_TYPE>('10');
  const [district, setDistrict] = useState<DISTRICTS_KEY_TYPE>('1');

  return (
    <div>
      <TypographyH4>
        <Gradient>Shipping Address</Gradient>
      </TypographyH4>
      <div className='mt-3 flex flex-col gap-3'>
        <Input placeholder='Full Name' />
        <Input type='email' placeholder='Email' />
        <Input type='tel' placeholder='Phone Number' />
        <Input placeholder='Bangladesh' disabled />
        <div className='flex flex-col gap-3 md:flex-row'>
          <Select
            onValueChange={(division) =>
              setDivision(
                DIVISIONS.find(
                  (item) => item.title === division,
                )?.value.toString() as DIVISIONS_KEY_TYPE,
              )
            }
          >
            <SelectTrigger className='w-full md:w-1/3'>
              <SelectValue placeholder='Division' />
            </SelectTrigger>
            <SelectContent>
              {DIVISIONS.map((division) => (
                <SelectItem key={division.title} value={division.title}>
                  {division.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select
            onValueChange={(district) =>
              setDistrict(
                DISTRICTS[division]
                  .find((item) => item.title === district)
                  ?.value.toString() as DISTRICTS_KEY_TYPE,
              )
            }
          >
            <SelectTrigger className='w-full md:w-1/3'>
              <SelectValue placeholder='District' />
            </SelectTrigger>
            <SelectContent>
              {DISTRICTS[division].map((district) => (
                <SelectItem
                  key={district.title + division}
                  value={district.title}
                  onClick={() => setDistrict(district.value.toString() as DISTRICTS_KEY_TYPE)}
                >
                  {district.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className='w-full md:w-1/3'>
              <SelectValue placeholder='Upazilla' />
            </SelectTrigger>
            <SelectContent>
              {UPAZILLAS[district].map((upazila) => (
                <SelectItem key={upazila.title + district} value={upazila.title}>
                  {upazila.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Input placeholder='Full Address' />
      </div>
    </div>
  );
};

export { ShippingAddress };
