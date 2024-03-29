import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
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
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const goToHomeScreen = () => {
    navigation.navigate('Launch')
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
            />
          )}
        </>
      )}
    />
  );
};

export default ListScreen;
