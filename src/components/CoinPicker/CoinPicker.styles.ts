import { useMemo } from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';


const useCoinPickerStyles = () => {
    const {width} = useWindowDimensions();

    const stylesheet = StyleSheet.create({
        wrapper: {
            backgroundColor: 'white',
            padding: 16,
            marginHorizontal: 8,
            width: width * 0.5,
            height: width * 0.45,
            borderRadius: 16,
          },
    });

    return useMemo(
      () => ({
        ...stylesheet,
      }),
      [stylesheet],
    );
  };

export default useCoinPickerStyles;
