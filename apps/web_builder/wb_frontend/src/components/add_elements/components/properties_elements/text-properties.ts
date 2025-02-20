interface TextStyle {
  fontSize: number;
  align: 'left' | 'center' | 'right'; 
  weight: 'regular' | 'medium' | 'bold'; 
  margin: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
  appearance: {
    textColor: string; 
    shadow: number; 
  };
}

export const getDefaultTextProperties = (): TextStyle => ({
  fontSize: 16, 
  align: 'left', 
  weight: 'bold', 
  margin: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  appearance: {
    textColor: 'rgba(92, 90, 90, 1)', 
    shadow: 0, 
  },
});
