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
import { updateOrderAddress } from '@/store/features/order';
import { AppDispatch } from '@/store/store';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '../ui/button';
import Gradient from '../ui/gradient';
import { Input } from '../ui/input';
import { TypographyH4 } from '../ui/typography';

const initialState = {
  name: '',
  email: '',
  phone: '',
  division: '',
  district: '',
  sub_district: '',
  address: '',
};

const ShippingAddress = () => {
  const [division, setDivision] = useState<DIVISIONS_KEY_TYPE>('10');
  const [district, setDistrict] = useState<DISTRICTS_KEY_TYPE>('1');
  const [address, setAddress] = useState(initialState);
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updateOrderAddress(address));
  };

  return (
    <div>
      <TypographyH4>
        <Gradient>Shipping Address</Gradient>
      </TypographyH4>
      <form onSubmit={handleSubmit} className='mt-3 flex flex-col gap-3'>
        <Input
          placeholder='Full Name'
          value={address.name}
          onChange={(e) => setAddress((prev) => ({ ...prev, name: e.target.value }))}
        />
        <Input
          type='email'
          placeholder='Email'
          value={address.email}
          onChange={(e) => setAddress((prev) => ({ ...prev, email: e.target.value }))}
        />
        <Input
          type='tel'
          placeholder='Phone Number'
          value={address.phone}
          onChange={(e) => setAddress((prev) => ({ ...prev, phone: e.target.value }))}
        />
        <Input placeholder='Bangladesh' disabled />
        <div className='flex flex-col gap-3 md:flex-row'>
          <Select
            onValueChange={(division) => {
              setDivision(
                DIVISIONS.find(
                  (item) => item.title === division,
                )?.value.toString() as DIVISIONS_KEY_TYPE,
              );
              setAddress((prev) => ({ ...prev, division }));
            }}
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
            onValueChange={(district) => {
              setDistrict(
                DISTRICTS[division]
                  .find((item) => item.title === district)
                  ?.value.toString() as DISTRICTS_KEY_TYPE,
              );
              setAddress((prev) => ({ ...prev, district }));
            }}
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
          <Select
            onValueChange={(sub_district) => setAddress((prev) => ({ ...prev, sub_district }))}
          >
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
        <Input
          placeholder='Full Address'
          value={address.address}
          onChange={(e) => setAddress((prev) => ({ ...prev, address: e.target.value }))}
        />
        <Button variant={'default'} className=''>
          Save Address
        </Button>
      </form>
    </div>
  );
};

export { ShippingAddress };
