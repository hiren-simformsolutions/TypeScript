import { StyleSheet } from 'react-native';
import { verticalScale, scale, Colors } from '../../theme';

export default StyleSheet.create({
  row: {
    paddingHorizontal: scale(18),
    paddingVertical: verticalScale(15),
  },
  idText: {
    color: Colors.black,
    fontSize: 14,
  },
  designationText: {
    color: Colors.black,
    fontSize: 16,
    marginTop: 3,
  },
});
