import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { Text, View } from 'react-native';
import useErrorStyles from './Error.styles';

const ErrorView = () => {
  const styles = useErrorStyles();

  return (
    <View style={styles.wrapper}>
      <FontAwesomeIcon
        icon={faTriangleExclamation}
        size={44}
        style={styles.icon}
      />
      <Text style={styles.label}>You are Offline</Text>
    </View>
  );
};

export default ErrorView;
