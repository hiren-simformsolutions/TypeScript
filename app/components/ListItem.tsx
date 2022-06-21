import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles/ListItemStyle';

const ListItem = ({ item }) => {
  return (
    <View style={styles.row}>
      <Text style={styles.idText}>{item.id}</Text>
      <Text style={styles.designationText}>{item.title}</Text>
    </View>
  );
};


export default ListItem;
