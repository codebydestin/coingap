import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Image, Pressable, Text, View } from 'react-native';
import React from 'react';
import useCarouselCardStyles from './CarouselCard.styles';
import { useNavigation } from '@react-navigation/native';

const CarouselCard = ({ coin }) => {
  const styles = useCarouselCardStyles();
  const { navigate } = useNavigation();

  return (
    <Pressable style={styles.wrapper} onPress={() => navigate('CoinDetail')}>
      <Image
        source={{
          uri: `https://cryptocompare.com/${coin?.CoinInfo?.ImageUrl}`,
        }}
        style={styles.icon}
      />
      <Text style={styles.boldText}>{coin.CoinInfo?.FullName}</Text>
      <Text style={styles.lightText}>{coin.CoinInfo?.Name}</Text>
      <View>
        <View style={styles.textWrapper}>
          <Text style={styles.priceText}>{coin.DISPLAY?.USD?.PRICE}</Text>
          <Text
            style={
              coin.DISPLAY?.USD?.CHANGEPCTDAY < 0
                ? styles.redColor
                : styles.greenColor
            }>
            {coin.DISPLAY?.USD?.CHANGEPCTDAY}%
          </Text>
          <FontAwesomeIcon
            size={13}
            color={coin.DISPLAY?.USD?.CHANGEPCTDAY < 0 ? '#fd595a' : '#29bc81'}
            style={styles.caret}
            icon={coin.DISPLAY?.USD?.CHANGEPCTDAY < 0 ? faCaretDown : faCaretUp}
          />
        </View>
      </View>
    </Pressable>
  );
};

export default CarouselCard;
