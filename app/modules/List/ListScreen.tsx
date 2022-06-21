import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import {
  CustomHeader,
  ListItem,
  ScreenContainer,
  HorizontalListContentLoader,
} from '../../components';
import { StaticData } from '../../constant';
import { Metrics } from '../../theme';
import styles from './styles/ListStyles';

const ListScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <ScreenContainer
      renderContent={() => (
        <>
          <CustomHeader title={'List'} />
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
