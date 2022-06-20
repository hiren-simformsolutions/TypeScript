import { StyleSheet, Platform } from 'react-native';
import { Colors, Fonts, scale, verticalScale, Metrics } from '../../theme';

const textInput = {
  color: Colors.darkBlue,
  fontSize: Fonts.size.label,
  textAlignVertical: 'center'
};

// const inputBg = {
//   borderRadius: 8,
//   borderWidth: 1,
//   minHeight: 0,
//   justifyContent: 'center',
//   paddingHorizontal: scale(16),
//   paddingVertical: Platform.OS === 'ios' ? verticalScale(15) : 0
// };

const icon = {
  height: scale(22),
  width: scale(22),
  borderRadius: scale(11),
  position: 'absolute',
  right: scale(16)
};

const styles = StyleSheet.create({
  inputBg: {
    width: Metrics.screenWidth * 0.95,
    alignSelf: 'center',
    justifyContent: 'center',
    paddingVertical:
      Platform.OS === 'ios' ? verticalScale(10) : verticalScale(0)
  },
  inputText: {
    color: Colors.cadmiumyellow,
    fontSize: Fonts.size.medium
  },
  inputBorder: {
    backgroundColor: Colors.brick,
    height: 1,
    width: Metrics.screenWidth * 0.95,
    alignSelf: 'center'
  },
  input: {
    width: scale(295),
    ...textInput
  },
  inputVerified: {
    width: scale(265),
    ...textInput
  },
  alertText: {
    color: Colors.red,
    fontSize: Fonts.size.small
  },
  warningIcon: {
    height: verticalScale(12),
    width: scale(12),
    resizeMode: 'contain'
  },
  errorView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(5),
    width: Metrics.screenWidth * 0.95,
    alignSelf: 'center'
  },
  redBorder: {
    borderColor: Colors.hotPink
  },
  loadingBorder: {
    borderColor: Colors.seaFoamBlue
  },
  validBorder: {
    borderColor: Colors.bluishGreenTwo
  },
  rightIcon: {
    ...icon
  },
  rightInfoIcon: {
    ...icon,
    tintColor: Colors.hotPink
  }
});

export default styles;
