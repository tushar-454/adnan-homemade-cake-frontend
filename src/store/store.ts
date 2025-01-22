import { carousel } from '@/api/carousel';
import { category } from '@/api/category';
import { coupon } from '@/api/Coupon';
import { gallery } from '@/api/gallery';
import { product } from '@/api/product';
import { reviews } from '@/api/reviews';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart';
import globalReducer from './features/globalReducer';
import orderReducer from './features/order';

const store = configureStore({
  reducer: {
    global: globalReducer,
    cart: cartReducer,
    order: orderReducer,
    [category.reducerPath]: category.reducer,
    [carousel.reducerPath]: carousel.reducer,
    [product.reducerPath]: product.reducer,
    [reviews.reducerPath]: reviews.reducer,
    [gallery.reducerPath]: gallery.reducer,
    [coupon.reducerPath]: coupon.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(category.middleware)
      .concat(carousel.middleware)
      .concat(product.middleware)
      .concat(reviews.middleware)
      .concat(gallery.middleware)
      .concat(coupon.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { store };
