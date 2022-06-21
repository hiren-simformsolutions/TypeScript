import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View, Text, Image } from 'react-native';
import { ScreenContainer } from '../../components';
import { Colors, Images } from '../../theme';
import styles from './styles/LaunchStyles';
import { useNavigation } from '@react-navigation/native';

const LaunchScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);

  const moveToListScreen = () => {
    navigation.navigate('List')
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      moveToListScreen()
    }, 1000);
  }, [navigation]);

  return (
    <ScreenContainer
      renderContent={() => (
        <View style={styles.container}>
          {loading ? (
            <>
              <ActivityIndicator color={Colors.black} size={'large'} />
              <Text style={styles.label}>Getting data..!!</Text>
            </>
          ) : (
            <>
              <Text style={styles.label} onPress={moveToListScreen}>Let's Go..!!</Text>
            </>
          )}
        </View>
      )}
    />
  );
};

export default LaunchScreen;
