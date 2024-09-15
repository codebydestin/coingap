import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

const useHomeStyles = () => {
  const stylesheet = StyleSheet.create({
    darkBg: {
      backgroundColor: '#6f34ff',
    },
    lightBg: {
      backgroundColor: ' #f6f8fa',
    },
    carouselWrapper: {
      backgroundColor: '#6f34ff',
      paddingVertical: 36,
    },
    scrollWrapper: {
      backgroundColor: '#f6f8fa',
    },
  });

  return useMemo(
    () => ({
      ...stylesheet,
    }),
    [stylesheet],
  );
};

export default useHomeStyles;
