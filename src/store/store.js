import { configureStore } from '@reduxjs/toolkit';
import salaryReducer from './slices/salarySlice';
import earningsReducer from './slices/earningsSlice';
import deductionsReducer from './slices/deductionsSlice';

const store = configureStore({
  reducer: {
    salary: salaryReducer,
    earnings: earningsReducer,
    deductions: deductionsReducer,
  },
});

export default store;