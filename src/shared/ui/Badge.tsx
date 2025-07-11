import { StyleSheet, Text, View } from 'react-native';
import { useThemeColors } from '../config';
import { FC } from 'react';

type PropTypes = { title: string };

export const UIBadge: FC<PropTypes> = ({ title }) => {
  const { colors } = useThemeColors();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.lineGrey,
        },
      ]}
    >
      <Text
        style={[
          styles.title,
          {
            color: colors.text,
          },
        ]}
      >
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 4,
    borderCurve: 'continuous',
  },
  title: {
    fontSize: 13,
    fontWeight: '500',
  },
});
