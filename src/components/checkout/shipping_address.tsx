import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Button } from '../ui/button';
import Gradient from '../ui/gradient';
import { Input } from '../ui/input';
import { TypographyH4 } from '../ui/typography';

const ShippingAddress = () => {
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
          <Select>
            <SelectTrigger className='w-1/3'>
              <SelectValue placeholder='Division' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='dhaka'>Dhaka</SelectItem>
              <SelectItem value='chattogram'>Chattogram</SelectItem>
              <SelectItem value='khulna'>Khulna</SelectItem>
              <SelectItem value='barishal'>Barishal</SelectItem>
              <SelectItem value='sylhet'>Sylhet</SelectItem>
              <SelectItem value='rajshahi'>Rajshahi</SelectItem>
              <SelectItem value='rangpur'>Rangpur</SelectItem>
              <SelectItem value='mymensingh'>Mymensingh</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className='w-1/3'>
              <SelectValue placeholder='District' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='bandarban'>Bandarban</SelectItem>
              <SelectItem value='barguna'>Barguna</SelectItem>
              <SelectItem value='barishal'>Barishal</SelectItem>
              <SelectItem value='bhola'>Bhola</SelectItem>
              <SelectItem value='bogura'>Bogura</SelectItem>
              <SelectItem value='brahmanbaria'>Brahmanbaria</SelectItem>
              <SelectItem value='chandpur'>Chandpur</SelectItem>
              <SelectItem value='chattogram'>Chattogram</SelectItem>
              <SelectItem value='chuadanga'>Chuadanga</SelectItem>
              <SelectItem value='coxsbazar'>Cox&apos;s Bazar</SelectItem>
              <SelectItem value='cumilla'>Cumilla</SelectItem>
              <SelectItem value='dhaka'>Dhaka</SelectItem>
              <SelectItem value='dinajpur'>Dinajpur</SelectItem>
              <SelectItem value='faridpur'>Faridpur</SelectItem>
              <SelectItem value='feni'>Feni</SelectItem>
              <SelectItem value='gaibandha'>Gaibandha</SelectItem>
              <SelectItem value='gazipur'>Gazipur</SelectItem>
              <SelectItem value='gopalganj'>Gopalganj</SelectItem>
              <SelectItem value='habiganj'>Habiganj</SelectItem>
              <SelectItem value='jamalpur'>Jamalpur</SelectItem>
              <SelectItem value='jashore'>Jashore</SelectItem>
              <SelectItem value='jhalokathi'>Jhalokathi</SelectItem>
              <SelectItem value='jhenaidah'>Jhenaidah</SelectItem>
              <SelectItem value='joypurhat'>Joypurhat</SelectItem>
              <SelectItem value='khagrachari'>Khagrachari</SelectItem>
              <SelectItem value='khulna'>Khulna</SelectItem>
              <SelectItem value='kishoreganj'>Kishoreganj</SelectItem>
              <SelectItem value='kurigram'>Kurigram</SelectItem>
              <SelectItem value='kushtia'>Kushtia</SelectItem>
              <SelectItem value='lakshmipur'>Lakshmipur</SelectItem>
              <SelectItem value='lalmonirhat'>Lalmonirhat</SelectItem>
              <SelectItem value='madaripur'>Madaripur</SelectItem>
              <SelectItem value='magura'>Magura</SelectItem>
              <SelectItem value='manikganj'>Manikganj</SelectItem>
              <SelectItem value='meherpur'>Meherpur</SelectItem>
              <SelectItem value='moulvibazar'>Moulvibazar</SelectItem>
              <SelectItem value='munshiganj'>Munshiganj</SelectItem>
              <SelectItem value='mymensingh'>Mymensingh</SelectItem>
              <SelectItem value='naogaon'>Naogaon</SelectItem>
              <SelectItem value='narail'>Narail</SelectItem>
              <SelectItem value='narayanganj'>Narayanganj</SelectItem>
              <SelectItem value='narsingdi'>Narsingdi</SelectItem>
              <SelectItem value='natore'>Natore</SelectItem>
              <SelectItem value='netrokona'>Netrokona</SelectItem>
              <SelectItem value='nilphamari'>Nilphamari</SelectItem>
              <SelectItem value='noakhali'>Noakhali</SelectItem>
              <SelectItem value='pabna'>Pabna</SelectItem>
              <SelectItem value='panchagarh'>Panchagarh</SelectItem>
              <SelectItem value='patuakhali'>Patuakhali</SelectItem>
              <SelectItem value='pirojpur'>Pirojpur</SelectItem>
              <SelectItem value='rajbari'>Rajbari</SelectItem>
              <SelectItem value='rajshahi'>Rajshahi</SelectItem>
              <SelectItem value='rangamati'>Rangamati</SelectItem>
              <SelectItem value='rangpur'>Rangpur</SelectItem>
              <SelectItem value='satkhira'>Satkhira</SelectItem>
              <SelectItem value='shariatpur'>Shariatpur</SelectItem>
              <SelectItem value='sherpur'>Sherpur</SelectItem>
              <SelectItem value='sirajganj'>Sirajganj</SelectItem>
              <SelectItem value='sunamganj'>Sunamganj</SelectItem>
              <SelectItem value='sylhet'>Sylhet</SelectItem>
              <SelectItem value='tangail'>Tangail</SelectItem>
              <SelectItem value='thakurgaon'>Thakurgaon</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className='w-1/3'>
              <SelectValue placeholder='Upazilla' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='dhaka'>Dhaka</SelectItem>
              <SelectItem value='chattogram'>Chattogram</SelectItem>
              <SelectItem value='khulna'>Khulna</SelectItem>
              <SelectItem value='barishal'>Barishal</SelectItem>
              <SelectItem value='sylhet'>Sylhet</SelectItem>
              <SelectItem value='rajshahi'>Rajshahi</SelectItem>
              <SelectItem value='rangpur'>Rangpur</SelectItem>
              <SelectItem value='mymensingh'>Mymensingh</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Input placeholder='Full Address' />
        <Button variant={'default'}>Save Address</Button>
      </div>
    </div>
  );
};

export default ShippingAddress;
