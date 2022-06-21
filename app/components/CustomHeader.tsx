import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import styles from './styles/CustomHeaderStyles';
import LinearGradient from 'react-native-linear-gradient';
import { Colors, Icons } from '../theme';

interface RenderLeftComponentProps {
  leftIcon: string,
  onLeftPress: () => void
}

interface CustomHeaderPropTypes {
  title?: string,
  leftIcon: string,
  onLeftPress: () => void
}

const RenderLeftComponent = ({ leftIcon, onLeftPress }: RenderLeftComponentProps) => (
  <Pressable style={styles.leftBg} onPress={onLeftPress}>
    {leftIcon && <Image source={leftIcon ? leftIcon : Icons.backArrow} style={styles.leftIcon} />}
  </Pressable>
);

const CustomHeader = ({
  title,
  leftIcon,
  onLeftPress
}: CustomHeaderPropTypes) => {
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
