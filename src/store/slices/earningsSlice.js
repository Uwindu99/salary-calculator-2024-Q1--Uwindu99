import { createSlice } from '@reduxjs/toolkit';

const earningsSlice = createSlice({
  name: 'earnings',
  initialState: {
    items: [],
  },
  reducers: {
    addEarning(state, action) {
      state.items.push(action.payload);
    },
    updateEarning(state, action) {
      const { id, value } = action.payload;
      const earning = state.items.find(item => item.id === id);
      if (earning) {
        earning.value = value;
      }
    },
    removeEarning(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { addEarning, updateEarning, removeEarning } = earningsSlice.actions;
export default earningsSlice.reducer;
