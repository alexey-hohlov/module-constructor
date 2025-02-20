import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUI } from '@/types/uiTypes';

const initialState: IUI = {
  menu: null,
  constructorDialog: null,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMenu(state, action: PayloadAction<string>) {
      state.menu = state.menu === action.payload ? null : action.payload;
    },
    toggleConstructorDialog(state, action: PayloadAction<string | null>) {
      state.constructorDialog =
        state.constructorDialog === action.payload ? null : action.payload;
    },
  },
});

export default uiSlice.reducer;
