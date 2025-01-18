'use client';
import { useReviewsQuery } from '@/api/reviews';
import { useEffect, useRef } from 'react';
import { Container } from '../shared/container';
import ReviewSkeleton from '../skeleton/review';
import Gradient from '../ui/gradient';
import { TypographyH2, TypographyMuted, TypographyP } from '../ui/typography';
import { ReviewCard } from './review_card';

const Reviews = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const { data, isLoading, isError } = useReviewsQuery();

  const { data: reviews } = data || { success: false, data: [] };

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
    placeholder = <ReviewSkeleton />;
  }

  if (!isLoading && isError) {
    placeholder = (
      <TypographyP className='text-center text-red-500'>Failed to load reviews</TypographyP>
    );
  }

  if (!isLoading && !isError && Array.isArray(reviews) && reviews.length === 0) {
    placeholder = <TypographyMuted className='text-center'>No reviews found</TypographyMuted>;
  }

  return (
    <section>
      <Container>
        <TypographyH2 id='reviews'>
          <Gradient>Reviews & Feedback</Gradient>
        </TypographyH2>
        {/* wrapper  */}
        {placeholder ? (
          <div className='my-8'>{placeholder}</div>
        ) : (
          <div
            id='slider'
            ref={sliderRef}
            className='my-8 flex flex-nowrap items-center justify-between gap-6 overflow-x-hidden'
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* product */}
            {reviews && reviews?.map((review) => <ReviewCard key={review._id} review={review} />)}
          </div>
        )}
      </Container>
    </section>
  );
};

export { Reviews };
