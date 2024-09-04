import { useMemo } from 'react';
import { StyleSheet } from 'react-native';


const useErrorStyles = () => {

    const stylesheet = StyleSheet.create({
        wrapper: {
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            padding: 16,
            marginTop: 22,
            borderRadius: 16,
          },
          icon: {
            marginBottom: 12,
            color: '#7c8283',
          },
          label: {
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

export default useErrorStyles;
