import { StyleSheet, Text, View } from 'react-native';
import { useThemeColors } from '../config';
import { FC, PropsWithChildren } from 'react';

type PropTypes = PropsWithChildren & { title: string };

export const UICard: FC<PropTypes> = ({ children, title }) => {
  const { colors } = useThemeColors();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.backgroundSecond,
          borderColor: colors.lineGrey,
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
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
