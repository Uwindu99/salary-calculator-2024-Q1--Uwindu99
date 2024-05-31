import { createSlice } from '@reduxjs/toolkit';

const deductionsSlice = createSlice({
  name: 'deductions',
  initialState: {
    items: [],
  },
  reducers: {
    addDeduction(state, action) {
      state.items.push(action.payload);
    },
    updateDeduction(state, action) {
      const { id, value } = action.payload;
      const deduction = state.items.find(item => item.id === id);
      if (deduction) {
        deduction.value = value;
      }
    },
    removeDeduction(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { addDeduction, updateDeduction, removeDeduction } = deductionsSlice.actions;
export default deductionsSlice.reducer;