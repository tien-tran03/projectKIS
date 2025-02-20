// @ts-ignore
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchData } from '../../../types';
import { RootState } from '../../store'; 

const initialState: SearchData = {
  keyword: '',
};

const searchSlice = createSlice({
  name: 'searchData',
  initialState,
  reducers: {
    setSearchKeyword: (state, action: PayloadAction<string>) => {
      state.keyword = action.payload;
    },
  },
});

export const { setSearchKeyword } = searchSlice.actions;

export const selectSearchKeyword = (state: RootState): string => state.searchData.keyword;

export default searchSlice.reducer;
