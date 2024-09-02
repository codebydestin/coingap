import { useMemo } from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';


const useCoinCardStyles = () => {
    const {width} = useWindowDimensions();

    const stylesheet = StyleSheet.create({
        wrapper: {
            borderBottomColor: '#f6f8fa',
            borderBottomWidth: 4,
            flexDirection: 'row',
            paddingVertical: 16,
            flex: 1,
            alignItems: 'center',
        },
        textWrapper: {
            flex: 1,
        },
        priceWrapper: {
            alignItems: 'flex-end',
        },
        boldText: {
            color: '#171725',
            fontWeight: '700',
            marginBottom: 4,
            lineHeight: 20,
            fontSize: 15,
        },
        lightText: {
            color: '#7c8283',
            textTransform: 'uppercase',
        },
        priceText: {
            color: '#171725',
            fontWeight: '600',
            marginBottom: 4,
            lineHeight: 20,
            fontSize: 15,
        },
        icon: {
            width: 32,
            height: 32,
            resizeMode: 'contain',
            marginRight: 16,
        },
        subTextWrapper: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        pcChangeText: {
            marginRight: 6,
            fontSize: 12,
        },
    });

    return useMemo(
      () => ({
        ...stylesheet,
      }),
      [stylesheet],
    );
  };

export default useCoinCardStyles;
