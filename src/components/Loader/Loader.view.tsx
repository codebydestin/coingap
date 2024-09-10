import React from 'react';
import { useWindowDimensions, View } from 'react-native';
import LoaderKit from 'react-native-loader-kit';

const LoaderView = () => {
  const { height } = useWindowDimensions();
  return (
    <View
      style={{
        alignItems: 'center',
        marginTop: height * 0.4,
      }}>
      <LoaderKit
        style={{ width: 24, height: 24 }}
        name={'LineScale'} // Optional: see list of animations below
        color={'blue'}
      />
    </View>
  );
};

export default LoaderView;
