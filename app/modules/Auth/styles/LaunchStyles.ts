import { StyleSheet } from 'react-native';
import { Colors, scale } from '../../../theme';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  label: {
    color: Colors.black,
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20
  },
  checkedImage: {
    width: scale(50),
    height: scale(50),
    resizeMode: 'contain'
  }
});
