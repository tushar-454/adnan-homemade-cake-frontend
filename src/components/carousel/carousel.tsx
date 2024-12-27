'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Container } from '../shared/container';
import { CarouselItem } from './carousel_item';

export type TCarousel = {
  _id: string;
  image: string;
  button_link?: string;
  button_text?: string;
  description?: string;
  title?: string;
};

export const carouselsData: TCarousel[] = [
  {
    _id: '543ds583490343454343',
    image: '',
  },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  // carousel control function
  const handleCarousel = (action: string) => {
    const totalSlides = carouselsData.length - 1;
    if (action === 'next') {
      if (currentSlide === totalSlides) {
        return setCurrentSlide(0);
      }
      setCurrentSlide((prev) => prev + 1);
    }
    if (action === 'prev') {
      if (currentSlide === 0) {
        return setCurrentSlide(totalSlides);
      }
      setCurrentSlide((prev) => prev - 1);
    }
  };
  // auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlider) =>
        currentSlider === carouselsData.length - 1 ? 0 : currentSlider + 1,
      );
    }, 1000 * 3);
    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <Container>
        {/* Carousel wrapper  */}
        <div className='relative my-8 overflow-hidden'>
          <div
            className='ease-[cubic-bezier(0.81, 0.01, 0, 0.28)] flex duration-500'
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {carouselsData.map((carousel) => (
              <CarouselItem key={carousel.title} carousel={carousel} />
            ))}
          </div>

          {/* slider controls */}
          {carouselsData.length > 1 && (
            <div className='absolute top-1/2 z-50 flex w-full -translate-y-1/2 items-center justify-between'>
              <span onClick={() => handleCarousel('prev')}>
                <ChevronLeft className='cursor-pointer text-4xl text-white' />
              </span>
              <span onClick={() => handleCarousel('next')}>
                <ChevronRight className='cursor-pointer text-4xl text-white' />
              </span>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export { Carousel };
