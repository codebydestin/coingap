import { useEffect, useMemo, useState } from 'react';
import api from '../api/api';
import { TopCoinResponse } from '../models/TopCoinResponse';
import { CGCoin } from '../models/CGCoin';

export default () => {
  const [coins, setCoins] = useState<CGCoin[] | null>(null);
  const [onError, setOnError] = useState<boolean>(false);
  const [errorString, setErrorString] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [status, setStatus] = useState(null);

  const fetchTopCoins = async () => {
    // Reset state values before fetching
    setIsLoading(true);
    setCoins(null);
    setOnError(false);
    setErrorString(null);
    setStatus(null);

    try {
      // API call to get top coins
      const { data } = await api.get<TopCoinResponse>('/top/totalvolfull', {
        params: {
          limit: 40,
          tsym: 'USD',
        },
      });

      // Filter out coins that don't have both RAW and DISPLAY
      const filterCoins = data.Data.filter(d => d.RAW && d.DISPLAY);

      // Map filtered coins into the desired structure only if RAW and DISPLAY are not null
      const finalCoins: CGCoin[] = filterCoins.map(
        ({ CoinInfo, RAW, DISPLAY }) => ({
          coinInfo: {
            coinId: CoinInfo.Id,
            fullName: CoinInfo.FullName,
            shortName: CoinInfo.Name,
            imageUrl: CoinInfo.ImageUrl,
            url: CoinInfo.Url,
          },
          raw: {
            fromSymbol: RAW!.USD.FROMSYMBOL,
            toSymbol: RAW!.USD.TOSYMBOL,
            price: RAW!.USD.PRICE,
            openHour: RAW!.USD.OPENHOUR,
            highHour: RAW!.USD.HIGHHOUR,
            lowHour: RAW!.USD.LOWHOUR,
            openDay: RAW!.USD.OPENDAY,
            highDay: RAW!.USD.HIGHDAY,
            lowDay: RAW!.USD.LOWDAY,
            open24Hour: RAW!.USD.OPEN24HOUR,
            high24Hour: RAW!.USD.HIGH24HOUR,
            low24Hour: RAW!.USD.LOW24HOUR,
            change24Hour: RAW!.USD.CHANGE24HOUR,
            changePct24Hour: RAW!.USD.CHANGEPCT24HOUR,
            changeDay: RAW!.USD.CHANGEDAY,
            changePctDay: RAW!.USD.CHANGEPCTDAY,
            changeHour: RAW!.USD.CHANGEHOUR,
            changePctHour: RAW!.USD.CHANGEPCTHOUR,
            imageUrl: RAW!.USD.IMAGEURL,
          },
          display: {
            fromSymbol: DISPLAY!.USD.FROMSYMBOL,
            toSymbol: DISPLAY!.USD.TOSYMBOL,
            price: DISPLAY!.USD.PRICE,
            openHour: DISPLAY!.USD.OPENHOUR,
            highHour: DISPLAY!.USD.HIGHHOUR,
            lowHour: DISPLAY!.USD.LOWHOUR,
            openDay: DISPLAY!.USD.OPENDAY,
            highDay: DISPLAY!.USD.HIGHDAY,
            lowDay: DISPLAY!.USD.LOWDAY,
            open24Hour: DISPLAY!.USD.OPEN24HOUR,
            high24Hour: DISPLAY!.USD.HIGH24HOUR,
            low24Hour: DISPLAY!.USD.LOW24HOUR,
            change24Hour: DISPLAY!.USD.CHANGE24HOUR,
            changePct24Hour: DISPLAY!.USD.CHANGE24HOUR,
            changeDay: DISPLAY!.USD.CHANGEDAY,
            changePctDay: DISPLAY!.USD.CHANGEPCTDAY,
            changeHour: DISPLAY!.USD.CHANGEHOUR,
            changePctHour: DISPLAY!.USD.CHANGEPCTHOUR,
            imageUrl: DISPLAY!.USD.IMAGEURL,
          },
        }),
      );
      setCoins(finalCoins);
    } catch (err: any) {
      console.error('Error fetching coins:', err.message || err);
      setOnError(true);
      setErrorString(err.message || 'An error occurred while fetching coins.');
    } finally {
      setIsLoading(false); // Always stop loading
    }
  };

  useEffect(() => {
    fetchTopCoins();
  }, []);

  const sortByPrice = useMemo(() => {
    return () => {
      if (coins) {
        const sortedCoins = [...coins].sort(
          (a, b) => (b.raw.price ?? 0) - (a.raw.price ?? 0),
        );
        setCoins(sortedCoins);
      }
    };
  }, [coins]);

  const sortByPctGain = useMemo(() => {
    return () => {
      if (coins) {
        const sortedCoins = [...coins].sort(
          (a, b) => (b.raw.changePctDay ?? 0) - (a.raw.changePctDay ?? 0),
        );
        setCoins(sortedCoins);
      }
    };
  }, [coins]);

  const sortByPctLoss = useMemo(() => {
    return () => {
      if (coins) {
        const sortedCoins = [...coins].sort(
          (a, b) => (a.raw.changePctDay ?? 0) - (b.raw.changePctDay ?? 0),
        );
        setCoins(sortedCoins);
      }
    };
  }, [coins]);

  return [
    fetchTopCoins,
    coins,
    onError,
    isLoading,
    sortByPrice,
    sortByPctGain,
    sortByPctLoss,
  ];
};
