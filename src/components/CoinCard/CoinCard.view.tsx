import React, { Image, Pressable, Text, View } from 'react-native';
import useCoinCardStyles from './CoinCard.styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import { FC } from 'react';
import { CGCoin } from '../../models/CGCoin';

interface Props {
  coin: CGCoin;
}

const CoinCard: FC<Props> = ({ coin }) => {
  const styles = useCoinCardStyles();
  const { navigate } = useNavigation();

  const { coinInfo, raw, display } = coin;

  return (
    <Pressable style={styles.wrapper} onPress={() => navigate('CoinDetail')}>
      <Image
        source={{
          uri: `https://cryptocompare.com/${coinInfo.imageUrl}`,
        }}
        style={styles.icon}
      />
      <View style={styles.textWrapper}>
        <Text style={styles.boldText}>{coinInfo?.fullName}</Text>
        <Text style={styles.lightText}>{coinInfo?.shortName}</Text>
      </View>
      <View style={styles.priceWrapper}>
        <View style={styles.subTextWrapper}>
          <Text
            style={[
              styles.pcChangeText,
              {
                color: raw.changePctDay < 0 ? '#fd595a' : '#29bc81',
              },
            ]}>
            {display.changePctDay}%
          </Text>
          <FontAwesomeIcon
            size={13}
            style={{
              marginBottom: 4,
              color: raw.changePctDay < 0 ? '#fd595a' : '#29bc81',
            }}
            icon={raw.changePctDay < 0 ? faCaretDown : faCaretUp}
          />
        </View>
        <Text style={styles.priceText}>{display.price}</Text>
      </View>
    </Pressable>
  );
};

export default CoinCard;
