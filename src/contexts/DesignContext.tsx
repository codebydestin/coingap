import React, { useContext, useMemo } from 'react';
import { ColorValue } from 'react-native';

export interface Design {
  isDark: boolean;

  // Semantic colors
  backgroundColor: ColorValue;
  lightBackgroundColor: ColorValue;
  primaryText: ColorValue;
  lightText: ColorValue;
  mediumDarkText: ColorValue;
  mediumLightText: ColorValue;
  secondaryText: ColorValue;
  systemFill: ColorValue;
  secondarySystemFill: ColorValue;

  // Color palette
  designWhite: ColorValue;
  designMediumGrey: ColorValue;
  designRed: ColorValue;
  designRedHighContrast: ColorValue;
  designLightRed: ColorValue;
  designGreen: ColorValue;
  designLightGreen: ColorValue;
  designGreenHighContrast: ColorValue;
  designDarkGreen: ColorValue;
}

const Base: Partial<Design> = {
  designWhite: 'white',
  designMediumGrey: '#D9D9D9',
  designRedHighContrast: '#D50037',
  designLightGreen: '#0098631A',
  designGreenHighContrast: '#009863',
};

export const LightDesign: Design = {
  ...(Base as Design),
  isDark: false,
  backgroundColor: 'white',
  lightBackgroundColor: '#f6f6f6',
  primaryText: 'black',
  lightText: 'white',
  mediumDarkText: '#2A282F',
  mediumLightText: '#A0A0A0',
  secondaryText: '#3C3C43',
  systemFill: '#E5E5EA',
  secondarySystemFill: '#C7C7CC',
  designRed: '#D50037',
  designLightRed: '#D500371A',
  designGreen: '#009863',
  designDarkGreen: '#005235',
};

export const DarkDesign: Design = {
  ...(Base as Design),
  isDark: true,
  backgroundColor: 'black',
  lightBackgroundColor: '#2C2C2E80',
  primaryText: 'white',
  lightText: 'white',
  secondaryText: '#AEAFB2',
  mediumDarkText: '#FFFFFF',
  mediumLightText: '#FFFFFF',
  systemFill: '#2C2C2E',
  secondarySystemFill: '#3A3A3C',
  designRed: '#8F001F',
  designLightRed: '#3E0017',
  designGreen: '#005235',
  designDarkGreen: '#003D28',
};

interface DesignProviderProps {
  children: React.ReactNode;
  value: Design;
}

interface DesignContextData extends Design {}

const DesignContext = React.createContext<DesignContextData | undefined>(
  undefined,
);

const DesignProvider = ({
  children,
  value,
}: DesignProviderProps): JSX.Element => {
  const DesignContextData = useMemo(() => value, [value]);
  return (
    <DesignContext.Provider value={DesignContextData}>
      {children}
    </DesignContext.Provider>
  );
};

const useDesign = (): DesignContextData => {
  const context = useContext(DesignContext);

  if (context === undefined) {
    throw new Error('useDesign must be used within a DesignContext');
  }
  return context;
};

export { DesignProvider, useDesign };
