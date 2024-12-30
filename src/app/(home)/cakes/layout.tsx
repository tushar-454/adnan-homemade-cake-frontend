import { Container } from '@/components/shared/container';
import React from 'react';

const CakeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Container>{children}</Container>
    </main>
  );
};

export default CakeLayout;
