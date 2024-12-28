'use client';

import { assets } from '@/assets/assets';
import {
  Facebook,
  Instagram,
  LinkedinIcon,
  Mail,
  Map,
  PhoneCall,
  Twitter,
  Youtube,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { TypographyH4, TypographyMuted } from '../ui/typography';

const Footer = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v21.0';
    script.async = true;
    script.defer = true;
    script.crossOrigin = 'anonymous';
    document.body.appendChild(script);
  }, []);
  return (
    <footer className='bg-foreground pt-10'>
      <div className='mx-auto max-w-screen-xl px-4 2xl:px-0'>
        <div className='flex flex-col justify-between sm:px-[18px] md:flex-row md:px-10'>
          {/* column 1 */}
          <div className='md:w-[316px]'>
            <Link href='/' className='flex items-center gap-2'>
              <Image
                src={assets.logo}
                alt='logo'
                width={50}
                height={50}
                className='size-16 rounded-full'
              />
              <TypographyH4 className='flex flex-col'>
                <span className='text-white'>Adnan Homemade </span>
                <span className='text-white'>Cake Shop</span>
              </TypographyH4>
            </Link>
            <p className='mt-[18px] text-[15px] font-normal text-white/[80%]'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, fugit non. Incidunt
              dolorum adipisci, tempore asperiores nemo odio facere officiis enim animi placeat
              eaque nesciunt alias beatae id, at dicta.
            </p>
            <div className='mt-[18px] flex gap-4'>
              <a className='transition-all hover:scale-110' target='_blank' href='#'>
                <Facebook size={25} className='text-white' />
              </a>
              <a className='transition-all hover:scale-110' target='_blank' href='/'>
                <LinkedinIcon size={25} className='text-white' />
              </a>
              <a className='transition-all hover:scale-110' target='_blank' href='/'>
                <Instagram size={25} className='text-white' />
              </a>
              <a className='transition-all hover:scale-110' target='_blank' href=''>
                <Twitter size={25} className='text-white' />
              </a>
              <a
                className='transition-all hover:scale-110'
                target='_blank'
                href='https://www.youtube.com/'
              >
                <Youtube size={25} className='text-white' />
              </a>
            </div>
          </div>
          {/* column 2 */}
          <div className='md:w-[316px]'>
            <div className='mt-[23px] flex'>
              <div className='flex h-[38px] w-[38px] items-center justify-center rounded-[75%]'>
                <PhoneCall size={24} className='text-white' />
              </div>
              <div className='ml-[18px]'>
                <a
                  href='tel:+911800123444'
                  className='font-Inter text-[14px] font-medium text-white'
                >
                  +91 1800123444
                </a>
                <p className='font-Inter text-[12px] font-medium text-white'>Support Number</p>
              </div>
            </div>
            <div className='mt-[23px] flex'>
              <div className='flex h-[38px] w-[38px] items-center justify-center rounded-[75%]'>
                <Mail size={24} className='text-white' />
              </div>
              <div className='ml-[18px]'>
                <a
                  href='mailto:help@lorem.com'
                  className='font-Inter text-[14px] font-medium text-[#fff]'
                >
                  help@lorem.com
                </a>
                <p className='font-Inter text-[12px] font-medium text-[#fff]'>Support Email</p>
              </div>
            </div>
            <div className='mt-[23px] flex'>
              <div className='flex h-[38px] w-[38px] items-center justify-center rounded-[75%]'>
                <Map size={24} className='text-white' />
              </div>
              <div className='ml-[18px]'>
                <a
                  href='mailto:help@lorem.com'
                  className='font-Inter text-[14px] font-medium text-[#fff]'
                >
                  Sub Nerul, Mumbia, India, 123456
                </a>
                <p className='font-Inter text-[12px] font-medium text-white'>Address</p>
              </div>
            </div>
          </div>
          {/* column 3 */}
          <div className='mt-6 flex w-full flex-col justify-between text-white sm:flex-row md:mt-0 md:max-w-[341px]'>
            <div className=''>
              <div id='fb-root'></div>
              <div
                className='fb-page'
                data-href='https://www.facebook.com/profile.php?id=61568352154994'
                data-tabs=''
                data-width=''
                data-height=''
                data-small-header='false'
                data-adapt-container-width='false'
                data-hide-cover='false'
                data-show-facepile='false'
              >
                <blockquote
                  cite='https://www.facebook.com/profile.php?id=61568352154994'
                  className='fb-xfbml-parse-ignore'
                >
                  <a href='https://www.facebook.com/profile.php?id=61568352154994'>
                    Adnan Homemade Cake-আদনান হোমমেড কেক{' '}
                  </a>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className='mt-[30px] text-white' />
      <div className='flex items-center justify-center py-6'>
        <TypographyMuted className='text-center'>
          © Copyright 2024 , All Rights Reserved by Adnan Homemade Cake Shop
        </TypographyMuted>
      </div>
    </footer>
  );
};

export default Footer;
