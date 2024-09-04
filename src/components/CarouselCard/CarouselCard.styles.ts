import { useMemo } from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';


const useCarouselCardStyles = () => {
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
        textWrapper: {
            flexDirection: 'row',
            alignItems: 'center',
         },
        boldText: {
            color: '#171725',
            fontWeight: '700',
            lineHeight: 24,
            fontSize: 15,
        },
        lightText: {
            color: '#7c8283',
            textTransform: 'uppercase',
            flex: 1,
            fontSize: 14,
        },
        priceText: {
            color: '#171725',
            fontWeight: '600',
            lineHeight: 20,
            fontSize: 15,
            flex: 1,
        },
        icon: {
            width: 32,
            height: 32,
            resizeMode: 'contain',
            marginBottom: 8,
        },
        redColor: {
            color: '#fd595a',
        },
        greenColor: {
            color: '#29bc81',
        },
        caret: {
            marginLeft: 4,
        },
    });

    return useMemo(
      () => ({
        ...stylesheet,
      }),
      [stylesheet],
    );
  };

export default useCarouselCardStyles;
