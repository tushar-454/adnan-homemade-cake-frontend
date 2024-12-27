'use client';

import { store } from '@/store/store';
import { Provider } from 'react-redux';

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export { Wrapper };
