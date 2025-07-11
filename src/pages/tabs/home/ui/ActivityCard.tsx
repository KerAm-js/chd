import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export const ActivityCard = ({ title, time, budget, weather }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.tagsContainer}>
        <View style={[styles.tag, styles.timeTag]}>
          <Text style={styles.tagText}>{time}</Text>
        </View>
        <View style={[styles.tag, styles.budgetTag]}>
          <Text style={styles.tagText}>{budget}</Text>
        </View>
        <View style={[styles.tag, styles.weatherTag]}>
          <Text style={styles.tagText}>{weather}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const ActivitiesScreen = () => {
  const activities = [
    {
      id: 1,
      title: 'Футбол',
      time: '1 час',
      budget: '500 руб',
      weather: 'Ясная',
    },
    {
      id: 2,
      title: 'Прогулка в парке',
      time: '30 мин',
      budget: '0 руб',
      weather: 'Любая',
    },
    {
      id: 3,
      title: 'Чтение книги',
      time: '1 час',
      budget: '300 руб',
      weather: 'Любая',
    },
    {
      id: 4,
      title: 'Йога',
      time: '30 мин',
      budget: '0 руб',
      weather: 'Любая',
    },
    {
      id: 5,
      title: 'Поход в музей',
      time: '2 часа',
      budget: '1000 руб',
      weather: 'Дождливая',
    },
    {
      id: 6,
      title: 'Велоспорт',
      time: '1 час',
      budget: '0 руб',
      weather: 'Ясная',
    },
    {
      id: 7,
      title: 'Кино',
      time: '2 часа',
      budget: '1500 руб',
      weather: 'Любая',
    },
    {
      id: 8,
      title: 'Фотосессия',
      time: '1 час',
      budget: '0 руб',
      weather: 'Ясная',
    },
    {
      id: 9,
      title: 'Плавание',
      time: '30 мин',
      budget: '700 руб',
      weather: 'Любая',
    },
    {
      id: 10,
      title: 'Пикник',
      time: '2 часа',
      budget: '2000 руб',
      weather: 'Ясная',
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {activities.map(activity => (
          <ActivityCard
            key={activity.id}
            title={activity.title}
            time={activity.time}
            budget={activity.budget}
            weather={activity.weather}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginHorizontal: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 8,
    marginBottom: 8,
  },
  tagText: {
    fontSize: 12,
  },
  timeTag: {
    backgroundColor: '#dbeafe',
  },
  budgetTag: {
    backgroundColor: '#dcfce7',
  },
  weatherTag: {
    backgroundColor: '#fef9c3',
  },
});
