import { configureStore } from "@reduxjs/toolkit";
import propertiesReducer from "./features/properties_data_panel/properties"; 
import selectedContainerReducer from "./features/container_data/container-data"; 
import searchReducer from './features/search/search-slice';
export const store = configureStore({
  reducer: {
    properties: propertiesReducer, 
    container: selectedContainerReducer,
    searchData: searchReducer,  
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
