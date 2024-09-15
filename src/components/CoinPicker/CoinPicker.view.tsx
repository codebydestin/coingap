import React, { FC, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import useCoinPickerStyles from './CoinPicker.styles';

interface Props {
  onSelect: (index: number) => void;
}

const CoinPicker: FC<Props> = ({ onSelect }) => {
  const [activeTab, setActiveTab] = useState(0);
  const styles = useCoinPickerStyles();

  const tabs = [{ title: 'Price' }, { title: 'Gainers' }, { title: 'Losers' }];

  return (
    <View style={styles.wrapper}>
      {tabs.map(({ title }, index) => (
        <Pressable
          key={title}
          style={[styles.segment, index === activeTab && styles.active]}
          onPress={() => {
            setActiveTab(index);
            onSelect(index);
          }}>
          <Text style={activeTab === index ? styles.activeText : styles.text}>
            {title}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

export default CoinPicker;
