import { useEffect, useState } from 'react';
import React, { Pressable, Text, View } from 'react-native';
import api from '../../api/api';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CoinCard from '../../components/CoinCard/CoinCard.view';

const Home = (): JSX.Element => {
  const [coins, setCoins] = useState([]);

  const fetchCoins = async () => {
    const results = await api.get('/top/totalvolfull', {
      params: {
        limit: 100,
        tsym: 'USD',
      },
    });
    setCoins(results.data.Data);
    console.log(`DATA: ${JSON.stringify(results.data.Data)}`);
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  return (
    <KeyboardAwareScrollView style={{ backgroundColor: '#f6f8fa' }}>
      <View
        style={{
          backgroundColor: '#6f34ff',
          margin: 12,
          paddingVertical: 22,
          paddingHorizontal: 16,
          borderRadius: 22,
        }}>
        <Text>Hello App</Text>
        <Text>Hello App</Text>
      </View>

      <View
        style={{
          backgroundColor: 'white',
          margin: 12,
          paddingVertical: 22,
          paddingHorizontal: 16,
          borderRadius: 22,
        }}>
        {coins.map(c => (
          <CoinCard key={c.CoinInfo?.Id} coin={c} />
        ))}
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Home;
