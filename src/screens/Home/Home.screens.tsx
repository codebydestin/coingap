import { useEffect, useState } from 'react';
import React, { ScrollView, Text, View } from 'react-native';
import api from '../../api/api';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CoinCard from '../../components/CoinCard';
import CarouselCard from '../../components/CarouselCard';

const Home = (): JSX.Element => {
  const [coins, setCoins] = useState([]);

  const fetchCoins = async () => {
    const results = await api.get('/top/totalvolfull', {
      params: {
        limit: 40,
        tsym: 'USD',
      },
    });
    const filteredCoins = results.data.Data.filter(
      c => c.hasOwnProperty('RAW') && c.hasOwnProperty('DISPLAY'),
    );
    setCoins(filteredCoins);
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  return (
    <KeyboardAwareScrollView style={{ backgroundColor: '#f6f8fa' }}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={{
          backgroundColor: '#6f34ff',
          marginBottom: 22,
          paddingVertical: 36,
        }}>
        {coins.slice(0, 8).map(c => (
          <CarouselCard coin={c} />
        ))}
      </ScrollView>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Text>Price</Text>
        <Text>Gainers</Text>
        <Text>Losers</Text>
      </View>
      <View>
        {coins.map(c => (
          <CoinCard key={c.CoinInfo?.Id} coin={c} />
        ))}
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Home;
