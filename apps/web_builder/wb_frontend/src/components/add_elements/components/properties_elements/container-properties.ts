export interface DeftaultContainerProperties {
  id: string;
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
  width: string; 
  height: string;
}
export const getDefaultContainerProperties = () => ({
  id: "default-container",
  fontFamily: "Arial",
  fontSize: "16px",
  color: "#000000",
  position: "relative",
  top: "0px",
  left: "0px",
  width: "300px", 
  height: "300px", 
  backgroundColor: "#FFFFFF", 
  borderColor: "#CECECE",
  borderWidth: "1px",
  borderStyle: "solid", 
  boxShadowColor: "#464646",
  boxShadowOpacity: "30%", 
  borderRadius: "0px",
  paddingTop: 10,
  paddingBottom: 10,
  paddingLeft: 10,
  paddingRight: 10,
  marginTop: 10,
  marginRight: 10,
  marginBottom: 10,
  marginLeft: 10,
});
export const updateContainerProperties = (
  existingProperties: any, 
  newProperties: Partial<ReturnType<typeof getDefaultContainerProperties>>
) => ({
  ...existingProperties,
  ...newProperties,
});
