import axios from 'axios';
import { GetActivityParams } from './types';
import { IActivity } from '@/entities/activity';

export class AIService {
  private BASE_URL = 'http://localhost:3000/ask-gigachat';

  getActivities = async (params: GetActivityParams) => {
    const response = await axios.post<GetActivityParams, {data: IActivity[]}>(
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
    return response.data;
  };
}

export const aiSevice = new AIService();
