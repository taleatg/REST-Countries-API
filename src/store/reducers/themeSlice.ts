import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const ThemeState = {
  mode: 'dark',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState: ThemeState,
  reducers: {
    changeTheme(state, action: PayloadAction<string>) {
      state.mode = action.payload;
    },
  },
});

export default themeSlice.reducer;
