import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles/ListItemStyle';

// interface ListItemPropsType {
//   item: {
//     id?: number;
//     title: string;
//   }
// }

const ListItem = ({ item }) => {
  return (
    <View style={styles.row}>
      <Text style={styles.idText}>{item.id.toString()}</Text>
      <Text style={styles.designationText}>{item.title}</Text>
    </View>
  );
};


export default ListItem;
