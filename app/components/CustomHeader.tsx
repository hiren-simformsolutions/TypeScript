import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import styles from './styles/CustomHeaderStyles';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../theme';

const RenderLeftComponent = ({ leftText, leftIcon, onLeftPress }) => (
  <Pressable style={styles.leftBg} onPress={onLeftPress}>
    {leftText && <Text style={styles.headerText}>{leftText}</Text>}
    {leftIcon && <Image source={leftIcon} style={styles.leftIcon} />}
  </Pressable>
);

const CustomHeader = ({
  title,
  leftText,
  leftIcon,
  onLeftPress
}) => {
  return (
    <LinearGradient
      useAngle
      angle={75}
      locations={[0.25, 0.75]}
      colors={[Colors.cyanBlue, Colors.cyanBlue]}
      angleCenter={{ x: 0.5, y: 0.5 }}
      style={styles.header}
    >
      <>
        <RenderLeftComponent
          leftText={leftText}
          leftIcon={leftIcon}
          onLeftPress={onLeftPress}
        />
        <View style={styles.middleBg}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </>
    </LinearGradient>
  );
};


export default CustomHeader;
