import { ScrollView, StyleSheet, View } from 'react-native';
import { aiSevice } from '../api/service';
import { useEffect } from 'react';
import {isAxiosError} from 'axios';
import { ActivityCard } from './ActivityCard';

const activities = [
    {
      id: 1,
      title: 'Футбол',
      time: '1 час',
      budget: '500 руб',
      weather: 'Ясная'
    },
    {
      id: 2,
      title: 'Прогулка в парке',
      time: '30 мин',
      budget: '0 руб',
      weather: 'Любая'
    },
    {
      id: 3,
      title: 'Чтение книги',
      time: '1 час',
      budget: '300 руб',
      weather: 'Любая'
    },
    {
      id: 4,
      title: 'Прогулка по бульвару',
      time: '30 мин',
      budget: '1000000 руб',
      weather: 'Любая'
    },
    {
      id: 5,
      title: 'Позедка в горы',
      time: '8 часов',
      budget: '2000 руб',
      weather: 'Ясная'
    },
    {
      id: 6,
      title: 'Велоспорт',
      time: '1 час',
      budget: '0 руб',
      weather: 'Ясная'
    },
    {
      id: 7,
      title: 'Кино',
      time: '2 часа',
      budget: '1500 руб',
      weather: 'Любая'
    },
    {
      id: 8,
      title: 'Фотосессия',
      time: '1 час',
      budget: '0 руб',
      weather: 'Ясная'
    },
    {
      id: 9,
      title: 'Плавание',
      time: '30 мин',
      budget: '700 руб',
      weather: 'Любая'
    },
    {
      id: 10,
      title: 'Пикник',
      time: '2 часа',
      budget: '2000 руб',
      weather: 'Ясная'
    }
  ];

const getAnswer = async () => {
  try {
    const response = await aiSevice.getAnswer();
    console.log(response)
  } catch (error) {
    if (error && isAxiosError(error)) {
      console.log(error.request);
      console.log(error.response);
    } else {
      console.log(error)
    }
  }
}

export const HomePage = () => {

  useEffect(() => {
    getAnswer();
  }, [])

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
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    paddingTop: 16,
  },
  scrollContainer: {
    paddingBottom: 16,
  },
});
