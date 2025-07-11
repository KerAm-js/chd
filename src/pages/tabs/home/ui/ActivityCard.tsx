import { IActivity } from '@/entities/activity';
import { TEXT_STYLES } from '@/shared/config';
import { UIBadge, UICard, UIText } from '@/shared/ui';
import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';

type PropTypes = {
  activity: IActivity;
};

export const ActivityCard: FC<PropTypes> = ({ activity }) => {
  return (
    <UICard title={activity.title}>
      <UIText colorName="textGrey" style={styles.description}>{activity.description}</UIText>
      <View style={styles.tagsContainer}>
        {!!activity.freeTime && (
          <UIBadge title={activity.freeTime?.toString() + ' мин'} />
        )}
        {!!activity.budget && (
          <UIBadge title={activity.budget?.toString() + ' ₽'} />
        )}
        {!!activity.peopleCount && (
          <UIBadge title={activity.peopleCount?.toString() + ' чел'} />
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
  description: {
    ...TEXT_STYLES.small,
    marginBottom: 10,
  },
});
