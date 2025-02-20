import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { setProperties } from "./properties";

export const usePropertiesData = () => {
  const dispatch = useDispatch();
  const properties = useSelector((state: RootState) => state.properties);

  const updateProperties = (newProperties: Partial<typeof properties>) => {
    dispatch(setProperties(newProperties));
  };

  return { properties, updateProperties };
};
