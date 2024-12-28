import { carousel } from '@/api/carousel';
import { category } from '@/api/category';
import { product } from '@/api/product';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    [category.reducerPath]: category.reducer,
    [carousel.reducerPath]: carousel.reducer,
    [product.reducerPath]: product.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(category.middleware)
      .concat(carousel.middleware)
      .concat(product.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { store };
