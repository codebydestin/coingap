import React, { RefreshControl, ScrollView, View } from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CoinCard from '../../components/CoinCard';
import CarouselCard from '../../components/CarouselCard';
import CoinPicker from '../../components/CoinPicker';
import ErrorView from '../../components/Error/Error.view';
import Loader from '../../components/Loader';
import useTopCoins from '../../hooks/useTopCoins';
import useHomeStyles from './Home.styles';

const Home = (): JSX.Element => {
  const [
    fetchTopCoins,
    coins,
    onError,
    isLoading,
    sortByPrice,
    sortByPctGain,
    sortByPctLoss,
  ] = useTopCoins();

  const styles = useHomeStyles();

  return (
    <KeyboardAwareScrollView
      style={isLoading ? styles.lightBg : styles.darkBg}
      refreshControl={
        <RefreshControl
          refreshing={isLoading as boolean}
          onRefresh={fetchTopCoins as () => void}
        />
      }>
      {/**SHOW ERROR MODAL */}
      {onError && <ErrorView />}

      {isLoading && <Loader />}

      {!onError && !isLoading && (
        <>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            style={styles.carouselWrapper}>
            {coins?.map(c => (
              <CarouselCard key={c.coinInfo.coinId} coin={c} />
            ))}
          </ScrollView>

          <View style={styles.scrollWrapper}>
            <CoinPicker
              onSelect={(index: number) => {
                if (index === 1 && sortByPctGain) {
                  sortByPctGain();
                } else if (index === 2 && sortByPctLoss) {
                  sortByPctLoss();
                } else {
                  sortByPrice();
                }
              }}
            />

            {coins?.map(c => (
              <CoinCard key={c.CoinInfo?.Id} coin={c} />
            ))}
          </View>
        </>
      )}
    </KeyboardAwareScrollView>
  );
};

export default Home;
