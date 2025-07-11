import { SCREEN_PADDING_HORIZONTAL, THEME_COLORS } from '@/shared/config';
import { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type PropTypes = {
  onPress: () => void;
};

export const RefetchButton: FC<PropTypes> = ({ onPress }) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    right: SCREEN_PADDING_HORIZONTAL,
    bottom: 20,
    width: 50,
    height: 50,
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME_COLORS.light.primary,
  },
  plus: {
    fontSize: 25,
    fontWeight: '300',
    color: '#fff',
    paddingBottom: 4,
  },
});
