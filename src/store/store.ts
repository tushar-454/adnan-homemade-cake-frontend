import { carousel } from '@/api/carousel';
import { category } from '@/api/category';
import { gallery } from '@/api/gallery';
import { product } from '@/api/product';
import { reviews } from '@/api/reviews';
import { configureStore } from '@reduxjs/toolkit';
import globalReducer from './features/globalReducer';

const store = configureStore({
  reducer: {
    global: globalReducer,
    [category.reducerPath]: category.reducer,
    [carousel.reducerPath]: carousel.reducer,
    [product.reducerPath]: product.reducer,
    [reviews.reducerPath]: reviews.reducer,
    [gallery.reducerPath]: gallery.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(category.middleware)
      .concat(carousel.middleware)
      .concat(product.middleware)
      .concat(reviews.middleware)
      .concat(gallery.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { store };
