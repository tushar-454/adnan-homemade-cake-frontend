'use client';

import { Toaster } from '@/components/ui/toaster';
import { store } from '@/store/store';
import { Provider } from 'react-redux';

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <Toaster />
      {children}
    </Provider>
  );
};

export { Wrapper };
