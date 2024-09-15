import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Image, Pressable, Text, View } from 'react-native';
import React, { FC } from 'react';
import useCarouselCardStyles from './CarouselCard.styles';
import { useNavigation } from '@react-navigation/native';
import { CGCoin } from '../../models/CGCoin';

interface Props {
  coin: CGCoin;
}

const CarouselCard: FC<Props> = ({ coin }) => {
  const styles = useCarouselCardStyles();
  const { navigate } = useNavigation();

  const { coinInfo, raw, display } = coin;

  return (
    <Pressable style={styles.wrapper} onPress={() => navigate('CoinDetail')}>
      <Image
        source={{
          uri: `https://cryptocompare.com/${coinInfo?.imageUrl}`,
        }}
        style={styles.icon}
      />
      <Text style={styles.boldText}>{coinInfo?.fullName}</Text>
      <Text style={styles.lightText}>{coinInfo?.shortName}</Text>
      <View>
        <View style={styles.textWrapper}>
          <Text style={styles.priceText}>{display?.price}</Text>
          <Text
            style={raw.changePctDay < 0 ? styles.redColor : styles.greenColor}>
            {display?.changePctDay}%
          </Text>
          <FontAwesomeIcon
            size={13}
            color={raw?.changePctDay < 0 ? '#fd595a' : '#29bc81'}
            style={styles.caret}
            icon={raw?.changePctDay < 0 ? faCaretDown : faCaretUp}
          />
        </View>
      </View>
    </Pressable>
  );
};

export default CarouselCard;
