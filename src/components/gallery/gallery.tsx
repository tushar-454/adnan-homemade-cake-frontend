'use client';

import { useState } from 'react';
import { RowsPhotoAlbum } from 'react-photo-album';
import { Container } from '../shared/container';
import { Button } from '../ui/button';
import Gradient from '../ui/gradient';
import { TypographyH2 } from '../ui/typography';
import { renderNextImage } from './render_next_image';

const Gallery = () => {
  const [showall, setShowall] = useState(false);
  return (
    <section>
      <Container>
        <TypographyH2 id='gallery'>
          <Gradient>Gallery</Gradient>
        </TypographyH2>
        {/* wrapper  */}
        <div
          className={`relative my-8 rounded-lg ${showall ? 'h-auto' : 'max-h-[600px] overflow-hidden'}`}
        >
          {!showall && (
            <span className='absolute left-0 top-0 z-30 grid h-full w-full place-items-center items-end bg-gradient-to-b from-transparent to-black/50'>
              <Button
                variant={'ghost'}
                onClick={() => setShowall(!showall)}
                className='mb-5 text-white'
              >
                View More
              </Button>
            </span>
          )}
          <RowsPhotoAlbum
            photos={[
              {
                src: 'https://via.placeholder.com/100',
                width: 4,
                height: 3,
              },
              {
                src: 'https://via.placeholder.com/100',
                width: 1,
                height: 1,
              },
              {
                src: 'https://via.placeholder.com/100',
                width: 16,
                height: 9,
              },
              {
                src: 'https://via.placeholder.com/100',
                width: 9,
                height: 16,
              },
              {
                src: 'https://via.placeholder.com/100',
                width: 1,
                height: 1,
              },
              {
                src: 'https://via.placeholder.com/100',
                width: 4,
                height: 3,
              },
              {
                src: 'https://via.placeholder.com/100',
                width: 3,
                height: 4,
              },
              {
                src: 'https://via.placeholder.com/100',
                width: 16,
                height: 9,
              },
              {
                src: 'https://via.placeholder.com/100',
                width: 3,
                height: 4,
              },
              {
                src: 'https://via.placeholder.com/100',
                width: 16,
                height: 9,
              },
              {
                src: 'https://via.placeholder.com/100',
                width: 3,
                height: 4,
              },
              {
                src: 'https://via.placeholder.com/100',
                width: 16,
                height: 9,
              },
              {
                src: 'https://via.placeholder.com/100',
                width: 1,
                height: 1,
              },
              {
                src: 'https://via.placeholder.com/100',
                width: 1,
                height: 1,
              },
              {
                src: 'https://via.placeholder.com/100',
                width: 1,
                height: 1,
              },
              {
                src: 'https://via.placeholder.com/100',
                width: 1,
                height: 1,
              },
              {
                src: 'https://via.placeholder.com/100',
                width: 1,
                height: 1,
              },
              {
                src: 'https://via.placeholder.com/100',
                width: 1,
                height: 1,
              },
            ]}
            render={{ image: renderNextImage }}
            defaultContainerWidth={1200}
            sizes={{
              size: '1168px',
              sizes: [{ viewport: '(max-width: 1200px)', size: 'calc(100vw - 32px)' }],
            }}
          />
        </div>
      </Container>
    </section>
  );
};

export { Gallery };
