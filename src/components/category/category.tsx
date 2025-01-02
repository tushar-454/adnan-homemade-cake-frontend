'use client';

import { useCategoryQuery } from '@/api/category';
import { useEffect, useRef } from 'react';
import { Container } from '../shared/container';
import { CategorySkeleton } from '../skeleton/category';
import Gradient from '../ui/gradient';
import { TypographyH2, TypographyMuted, TypographyP } from '../ui/typography';
import { CategoryCard } from './category_card';

const Category = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const { data: categories, isLoading, isError } = useCategoryQuery();

  useEffect(() => {
    startAutoSlide();
    return () => {
      clearAutoSlide();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let isDragging = false;
  let startX = 0;
  let scrollLeft = 0;

  // Function to start auto-slide
  const startAutoSlide = () => {
    clearAutoSlide();
    intervalRef.current = setInterval(() => {
      if (!isDragging) {
        const slider = sliderRef.current;
        if (slider) {
          slider.scrollLeft += 1;
          if (slider.scrollLeft >= slider.scrollWidth - slider.offsetWidth) {
            slider.scrollLeft = 0;
          }
        }
      }
    }, 20); // Adjust auto-slide speed
  };

  // Function to clear auto-slide
  const clearAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    clearAutoSlide();
    isDragging = true;
    if (sliderRef.current) {
      startX = e.pageX - sliderRef.current.offsetLeft;
      scrollLeft = sliderRef.current.scrollLeft;
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 0.8; // Adjust scroll speed
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    isDragging = false;
    startAutoSlide();
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    clearAutoSlide();
    isDragging = true;
    if (sliderRef.current) {
      startX = e.touches[0].pageX - sliderRef.current.offsetLeft;
      scrollLeft = sliderRef.current.scrollLeft;
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging || !sliderRef.current) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 0.8;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    isDragging = false;
    startAutoSlide();
  };

  let placeholder;
  if (isLoading && !isError) {
    placeholder = <CategorySkeleton />;
  }

  if (!isLoading && isError) {
    placeholder = (
      <TypographyP className='text-center text-red-500'>Failed to load categories</TypographyP>
    );
  }

  if (!isLoading && !isError && Array.isArray(categories) && categories.length === 0) {
    placeholder = <TypographyMuted className='text-center'>No categories found</TypographyMuted>;
  }

  return (
    <section>
      <Container>
        <TypographyH2>
          <Gradient>Category</Gradient>
        </TypographyH2>
        {/* wrapper  */}
        {placeholder ? (
          placeholder
        ) : (
          <div
            id='slider'
            ref={sliderRef}
            className='my-4 flex flex-nowrap items-center justify-between gap-6 overflow-x-hidden'
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {categories &&
              categories.map((category, index) => (
                <div
                  key={category.id}
                  className={`flex select-none flex-col items-center gap-3 px-10 ${index === 0 ? 'pl-0' : ''} ${index === categories.length - 1 ? 'pr-0' : ''}`}
                >
                  <CategoryCard category={category} />
                </div>
              ))}
          </div>
        )}
      </Container>
    </section>
  );
};

export { Category };
