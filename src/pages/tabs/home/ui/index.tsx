import { View } from 'react-native';
import { aiSevice } from '../api/service';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import {isAxiosError} from 'axios';

const getToken = async () => {
  try {
    const response = await aiSevice.getAccessToken();
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
  // const query = useQuery({
  //   queryKey: ['prompt'],
  //   queryFn: aiSevice.getAccessToken,
  // })

  // useEffect(() => {
  //   if (query.error && isAxiosError(query.error)) {
  //     console.log(query.error.request);
  //     console.log(query.error.response);
  //   }
  // }, [query.error])

  useEffect(() => {
    getToken();
  }, [])

  return <View></View>;
};
