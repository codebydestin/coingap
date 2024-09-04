import React, { Image, Pressable, Text, View } from 'react-native';
import useCoinCardStyles from './CoinCard.styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';

const CoinCard = ({ coin }) => {
  const styles = useCoinCardStyles();
  const { navigate } = useNavigation();

  return (
    <Pressable style={styles.wrapper} onPress={() => navigate('CoinDetail')}>
      <Image
        source={{
          uri: `https://cryptocompare.com/${coin?.CoinInfo?.ImageUrl}`,
        }}
        style={styles.icon}
      />
      <View style={styles.textWrapper}>
        <Text style={styles.boldText}>{coin.CoinInfo?.FullName}</Text>
        <Text style={styles.lightText}>{coin.CoinInfo?.Name}</Text>
      </View>
      <View style={styles.priceWrapper}>
        <View style={styles.subTextWrapper}>
          <Text
            style={[
              styles.pcChangeText,
              {
                color:
                  coin.DISPLAY?.USD?.CHANGEPCTDAY < 0 ? '#fd595a' : '#29bc81',
              },
            ]}>
            {coin.DISPLAY?.USD?.CHANGEPCTDAY}%
          </Text>
          <FontAwesomeIcon
            size={13}
            style={{
              marginBottom: 4,
              color:
                coin.DISPLAY?.USD?.CHANGEPCTDAY < 0 ? '#fd595a' : '#29bc81',
            }}
            icon={coin.DISPLAY?.USD?.CHANGEPCTDAY < 0 ? faCaretDown : faCaretUp}
          />
        </View>
        <Text style={styles.priceText}>{coin.DISPLAY?.USD?.PRICE}</Text>
      </View>
    </Pressable>
  );
};

export default CoinCard;
