'use client';

import { assets } from '@/assets/assets';
import { nav_items } from '@/constant/nav_items';
import { MenuIcon, Plus, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Container } from '../shared/container';
import { Button } from '../ui/button';
import Gradient from '../ui/gradient';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const headerRef = useRef<HTMLHeadingElement>(null);
  const user = false;
  useEffect(() => {
    const head = headerRef.current;
    document.addEventListener('scrollend', () => {
      if (head && window.scrollY > 80) {
        head.classList.add('sticky_animation');
      }
      if (head && window.scrollY === 0) {
        head.classList.remove('sticky_animation');
      }
    });

    return () => {
      document.removeEventListener('scrollend', () => {
        if (head && window.scrollY > 90) {
          console.log(head);
        }
      });
    };
  }, []);
  return (
    <header className='border-b bg-white py-3' ref={headerRef}>
      <Container>
        <nav className='flex items-center justify-between'>
          <Link href='/'>
            <Image
              src={assets.logo}
              alt='logo'
              width={100}
              height={100}
              className='max-w-16 cursor-pointer rounded-full shadow-lg'
            />
          </Link>
          <div
            className={`min-h-auto absolute left-0 top-[5.5rem] z-[999999] flex w-full justify-start border-y-2 bg-white/80 p-5 backdrop-blur md:static md:scale-y-100 md:justify-center md:border-0 ${showMenu ? 'nav_animation' : 'scale-y-0'}`}
          >
            <ul className='flex flex-col items-start gap-8 md:flex-row md:items-center'>
              {nav_items.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.name}>
                    <Link
                      href={item.link}
                      className='whitespace-nowrap hover:text-gray-500'
                      onClick={() => setShowMenu(false)}
                    >
                      <span className='flex items-center justify-center gap-2'>
                        <Icon />
                        <Gradient>{item.name}</Gradient>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className='flex items-center gap-6'>
            {user ? (
              <Link href='/'>
                <Image
                  src={assets.DEFAULT_AVATAR}
                  alt='user_image'
                  width={50}
                  height={50}
                  className='size-10 cursor-pointer rounded-full object-cover'
                />
              </Link>
            ) : (
              <Button variant={'secondary'}>
                <span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    version='1.1'
                    xmlnsXlink='http://www.w3.org/1999/xlink'
                    width='512'
                    height='512'
                    x='0'
                    y='0'
                    viewBox='0 0 512 512'
                    xmlSpace='preserve'
                  >
                    <g>
                      <path
                        d='M113.47 309.408 95.648 375.94l-65.139 1.378C11.042 341.211 0 299.9 0 256c0-42.451 10.324-82.483 28.624-117.732h.014L86.63 148.9l25.404 57.644c-5.317 15.501-8.215 32.141-8.215 49.456.002 18.792 3.406 36.797 9.651 53.408z'
                        fill='#fbbb00'
                        data-original='#fbbb00'
                      ></path>
                      <path
                        d='M507.527 208.176C510.467 223.662 512 239.655 512 256c0 18.328-1.927 36.206-5.598 53.451-12.462 58.683-45.025 109.925-90.134 146.187l-.014-.014-73.044-3.727-10.338-64.535c29.932-17.554 53.324-45.025 65.646-77.911h-136.89V208.176h245.899z'
                        fill='#518ef8'
                        data-original='#518ef8'
                      ></path>
                      <path
                        d='m416.253 455.624.014.014C372.396 490.901 316.666 512 256 512c-97.491 0-182.252-54.491-225.491-134.681l82.961-67.91c21.619 57.698 77.278 98.771 142.53 98.771 28.047 0 54.323-7.582 76.87-20.818l83.383 68.262z'
                        fill='#28b446'
                        data-original='#28b446'
                      ></path>
                      <path
                        d='m419.404 58.936-82.933 67.896C313.136 112.246 285.552 103.82 256 103.82c-66.729 0-123.429 42.957-143.965 102.724l-83.397-68.276h-.014C71.23 56.123 157.06 0 256 0c62.115 0 119.068 22.126 163.404 58.936z'
                        fill='#f14336'
                        data-original='#f14336'
                      ></path>
                    </g>
                  </svg>
                </span>
                <span>Login with Google</span>
              </Button>
            )}
            <span className='relative'>
              <ShoppingCart />
              <small className='absolute -right-2 -top-2 grid h-4 w-4 place-content-center rounded-full bg-red-500 text-[9px] text-white'>
                10
              </small>
            </span>
            <span className='md:hidden' onClick={() => setShowMenu(!showMenu)}>
              {showMenu ? <Plus className='rotate-45' /> : <MenuIcon />}
            </span>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export { Header };
