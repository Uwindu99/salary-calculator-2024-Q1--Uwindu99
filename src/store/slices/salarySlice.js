import { createSlice } from '@reduxjs/toolkit';

const salarySlice = createSlice({
  name: 'salary',
  initialState: {
    basicSalary: 0,
  },
  reducers: {
    setBasicSalary(state, action) {
      state.basicSalary = action.payload;
    },
  },
});

export const { setBasicSalary } = salarySlice.actions;
export default salarySlice.reducer;
