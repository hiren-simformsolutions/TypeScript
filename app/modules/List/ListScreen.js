import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import SpinnerButton from 'react-native-spinner-button';
import {
  CustomHeader,
  ListItem,
  ScreenContainer,
  HorizontalListContentLoader,
} from '../../components';
import { StaticData } from '../../constant';
import { Icons, Metrics } from '../../theme';
import styles from './styles/ListStyles';

const ListScreen = () => {
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState();
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const goToHomeScreen = () => {
    navigation.navigate('Launch')
  }

  const refreshPage =() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }

  return (
    <ScreenContainer
      renderContent={() => (
        <>
          <CustomHeader title={'List'} leftIcon={Icons.backArrow} onLeftPress={goToHomeScreen} />
          {loading ? (
            <HorizontalListContentLoader
              containerWidth={Metrics.screenWidth * 0.95}
              pHeight={Metrics.screenHeight * 0.05}
              pWidth={Metrics.screenWidth * 0.95}
              containerStyles={styles.loaderContainer}
            />
          ) : (
            <FlatList
              style={styles.list}
              data={StaticData.bookBitesData}
              renderItem={({ item }) => <ListItem item={item} />}
              ItemSeparatorComponent={() => <View style={styles.seperator} />}
              ListFooterComponent={
              <SpinnerButton
                buttonStyle={styles.buttonStyle}
                isLoading={refreshing}
                onPress={refreshPage}
                indicatorCount={10}
              >
                <Text style={styles.buttonText}>Refresh List</Text>
              </SpinnerButton>}
            />
          )}
        </>
      )}
    />
  );
};

export default ListScreen;
