import { StyleSheet, Text, TextProps } from 'react-native';
import { ColorName, useThemeColors } from '../config';
import { FC, PropsWithChildren } from 'react';

type PropTypes = {
  colorName: ColorName;
  style?: TextProps['style'];
} & PropsWithChildren;

export const UIText: FC<PropTypes> = ({ children, style, colorName }) => {
  const { colors } = useThemeColors();
  return (
    <Text
      style={[
        styles.text,
        {
          color: colors[colorName],
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
});
