import { IActivity } from '@/entities/activity';
import { UIBadge, UICard } from '@/shared/ui';
import React, { FC } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

type PropTypes = {
  activity: IActivity;
};

export const ActivityCard: FC<PropTypes> = ({ activity }) => {
  return (
    <UICard title={activity.title}>
      <View style={styles.tagsContainer}>
        {!!activity.freeTime && (
          <UIBadge title={activity.freeTime?.toString() + ' мин'} />
        )}
        {!!activity.budget && (
          <UIBadge title={activity.budget?.toString() + ' ₽'} />
        )}
        {!!activity.peopleCount && (
          <UIBadge title={activity.peopleCount?.toString()} />
        )}
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
