import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SelectedContainerState {
  selectedContainerId: string | null;
}

const initialState: SelectedContainerState = {
  selectedContainerId: null,
};

const selectedContainerSlice = createSlice({
  name: "selectedContainer",
  initialState,
  reducers: {
    setSelectedContainer: (state, action: PayloadAction<string | null>) => {
      state.selectedContainerId = action.payload;
    },
  },
});

export const { setSelectedContainer } = selectedContainerSlice.actions;
export default selectedContainerSlice.reducer;
