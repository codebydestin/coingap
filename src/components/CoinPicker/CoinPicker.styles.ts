import { useMemo } from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';


const useCoinPickerStyles = () => {
    const {width} = useWindowDimensions();

    const stylesheet = StyleSheet.create({
        wrapper: {
          flexDirection: 'row',
          justifyContent: 'center',
          backgroundColor: 'white',
          width: width,
          marginBottom: 22,
        },
        segment: {
          paddingHorizontal: 20,
          paddingVertical: 12,
        },
        active: {
          borderBottomColor: '#6f34ff',
          borderBottomWidth: 4,
        },
        activeText: {
          fontWeight: '700',
          color: '#171725',
        },
        text: {
          color: '#7c8283',
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
