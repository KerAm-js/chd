import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { aiSevice } from '../api/service';
import { ActivityCard } from './ActivityCard';
import { useMutation } from '@tanstack/react-query';
import { RefetchButton } from './RefetchButton';
import { useEffect } from 'react';

export const HomePage = () => {
  const mutation = useMutation({
    mutationFn: aiSevice.getActivities,
  });

  useEffect(() => {
    mutation.mutate({});
  }, [])

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {mutation.isPending ? (
          <View style={styles.loaderContainer}>
            <ActivityIndicator />
          </View>
        ) : (
          mutation.data?.map?.(activity => (
            <ActivityCard key={activity.title} activity={activity} />
          ))
        )}
      </ScrollView>
      <RefetchButton onPress={() => mutation.mutate({})} />
    </View>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    paddingTop: 16,
  },
  scrollContainer: {
    paddingBottom: 16,
  },
});
