'use client';

import { useCarouselQuery } from '@/api/carousel';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Container } from '../shared/container';
import { CarouselSkeleton } from '../skeleton/carousel';
import { TypographyMuted, TypographyP } from '../ui/typography';
import { CarouselItem } from './carousel_item';

const Carousel = () => {
  const { data: carousels, isLoading, isError } = useCarouselQuery();
  const [currentSlide, setCurrentSlide] = useState(0);

  // carousel control function
  const handleCarousel = (action: 'next' | 'prev') => {
    if (!carousels) return;
    const totalSlides = carousels.length - 1;
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
      if (!isLoading && !isError && carousels) {
        setCurrentSlide((currentSlider) =>
          currentSlider === carousels.length - 1 ? 0 : currentSlider + 1,
        );
      }
    }, 1000 * 3);
    return () => clearInterval(interval);
  }, [isLoading, isError, carousels]);

  if (isLoading && !isError) {
    return <CarouselSkeleton />;
  }

  if ((!isLoading && isError) || carousels === undefined) {
    return (
      <Container>
        <TypographyP className='my-8 grid h-32 place-content-center rounded-2xl border text-center text-red-500'>
          Failed to load carousels
        </TypographyP>
      </Container>
    );
  }

  if (!isLoading && !isError && Array.isArray(carousels) && carousels.length === 0) {
    return (
      <Container>
        <TypographyMuted className='my-8 grid h-32 place-content-center rounded-2xl border text-center'>
          No carousels found
        </TypographyMuted>
      </Container>
    );
  }

  return (
    <section>
      <Container>
        {/* Carousel wrapper  */}
        <div className='relative my-8 !overflow-hidden'>
          <div
            className='ease-[cubic-bezier(0.81, 0.01, 0, 0.28)] flex h-40 duration-500 sm:h-60 md:h-96 2xl:h-[650px]'
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {carousels.map((carousel) => (
              <CarouselItem key={carousel.id} carousel={carousel} />
            ))}
          </div>

          {/* slider controls */}
          {carousels.length > 1 && (
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
