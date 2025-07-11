import { UIBadge, UICard } from '@/shared/ui';
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

type PropTypes = {

}

export const ActivityCard = ({ title, time, budget, weather }) => {
  return (
    <UICard title={title}>
      <View style={styles.tagsContainer}>
        <UIBadge title={time} />
        <UIBadge title={budget} />
        <UIBadge title={weather} />
      </View>
    </UICard>
  );
};

const styles = StyleSheet.create({
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 7,
  },
});
