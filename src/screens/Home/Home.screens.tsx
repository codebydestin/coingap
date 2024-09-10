import React, { ScrollView, View } from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CoinCard from '../../components/CoinCard';
import CarouselCard from '../../components/CarouselCard';
import CoinPicker from '../../components/CoinPicker';
import ErrorView from '../../components/Error/Error.view';
import Loader from '../../components/Loader';
import useTopCoins from '../../hooks/useTopCoins';

const Home = (): JSX.Element => {
  const [fetchTopCoins, coins, onError, isLoading] = useTopCoins();

  return (
    <KeyboardAwareScrollView style={{ backgroundColor: '#f6f8fa' }}>
      {/**SHOW ERROR MODAL */}
      {onError && <ErrorView />}

      {isLoading && <Loader />}

      {!onError && !isLoading && (
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
