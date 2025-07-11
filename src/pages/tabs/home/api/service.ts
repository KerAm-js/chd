import axios from 'axios';
import { GetActivityParams } from './types';
import { IActivity } from '@/entities/activity';

export class AIService {
  private BASE_URL = 'http://localhost:3000/ask-gigachat';

  getActivities = (params: GetActivityParams) => {
    return axios.post<GetActivityParams, IActivity[]>(
      this.BASE_URL,
      {
        query: params,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  };
}

export const aiSevice = new AIService();
