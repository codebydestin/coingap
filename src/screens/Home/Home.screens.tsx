import { useEffect, useState } from 'react';
import React, { ScrollView, Text, View } from 'react-native';
import api from '../../api/api';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CoinCard from '../../components/CoinCard';
import CarouselCard from '../../components/CarouselCard';
import CoinPicker from '../../components/CoinPicker';
import ErrorView from '../../components/Error/Error.view';

const Home = (): JSX.Element => {
  const [coins, setCoins] = useState([]);
  const [onError, setOnError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCoins = async () => {
    setOnError(false);

    try {
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
    } catch (err) {
      setOnError(true);
    }
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  return (
    <KeyboardAwareScrollView style={{ backgroundColor: '#f6f8fa' }}>
      {/**SHOW ERROR MODAL */}
      {onError && <ErrorView />}

      {!onError && (
        <>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            style={{
              backgroundColor: '#6f34ff',
              paddingVertical: 36,
            }}>
            {coins.slice(0, 8).map(c => (
              <CarouselCard key={c.CoinInfo.Id} coin={c} />
            ))}
          </ScrollView>
          <CoinPicker />
          <View>
            {coins.map(c => (
              <CoinCard key={c.CoinInfo?.Id} coin={c} />
            ))}
          </View>
        </>
      )}
    </KeyboardAwareScrollView>
  );
};

export default Home;
