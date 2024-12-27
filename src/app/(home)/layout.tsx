import { Header } from '@/components/header/header';
import { Wrapper } from './wrapper';

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Wrapper>
      <Header />
      <div>{children}</div>
    </Wrapper>
  );
};

export default RootLayout;
