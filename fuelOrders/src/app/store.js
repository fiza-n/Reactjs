import {configureStore} from '@reduxjs/toolkit';
import orderReducer from '../features/orders/fuelOrdersSlice';

export const store = configureStore({
    reducer: orderReducer
})