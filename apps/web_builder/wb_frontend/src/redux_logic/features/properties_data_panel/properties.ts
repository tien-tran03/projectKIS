import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getDefaultContainerProperties } from "../../../components";

interface PropertiesState {
  id: string;
  width: string | number;
  height: string | number;
  backgroundColor: string;
  borderColor: string;
  borderWidth: string;
  boxShadowColor: string;
  borderRadius: string;
  paddingTop: string | number;
  paddingBottom: string | number;
  paddingLeft: string | number;
  paddingRight: string | number;
  marginTop: string | number;
  marginRight: string | number;
  marginBottom: string | number;
  marginLeft: string | number;
}

const initialState: PropertiesState = {
...getDefaultContainerProperties(),
};

const propertiesSlice = createSlice({
  name: "properties",
  initialState,
  reducers: {
    setProperties: (state, action: PayloadAction<Partial<PropertiesState>>) => {
      return { ...state, ...action.payload };
    },
    resetProperties: () => initialState,
  },
});

export const { setProperties, resetProperties } = propertiesSlice.actions;
export default propertiesSlice.reducer;
