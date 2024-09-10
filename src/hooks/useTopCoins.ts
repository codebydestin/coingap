import { useEffect, useState } from 'react';
import api from '../api/api';

export default () => {
  const [coins, setCoins] = useState([]);
  const [onError, setOnError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchTopCoins = async () => {
    try {
      setIsLoading(true);
      setOnError(false);

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
    } finally {
      setIsLoading(false);
      console.log(`**** HIDE LOADER ${isLoading}`);
    }
  };

  useEffect(() => {
    fetchTopCoins();
  }, []);

  return [fetchTopCoins, coins, onError, isLoading];
};
