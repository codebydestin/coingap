import React from 'react';
import { Pressable, Text, View } from 'react-native';

const CoinPicker = () => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
      <Pressable>
        <Text>Price</Text>
      </Pressable>
      <Pressable>
        <Text>Gainers</Text>
      </Pressable>
      <Pressable>
        <Text>Losers</Text>
      </Pressable>
    </View>
  );
};

export default CoinPicker;
