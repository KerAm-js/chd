import axios from 'axios';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export class AIService {
  private AUTH_URL = 'https://ngw.devices.sberbank.ru:9443/api/v2/oauth';
  private BASE_URL = 'https://gigachat.devices.sberbank.ru/api/v1/';
  private CLIENT_ID = '7ab8cb30-c85c-4f50-a29c-b5c972a93339';
  private CLIENT_SECRET = '6c33516c-978c-4e8a-ad0b-32b511d474d6';
  private AUTH_KEY =
    'N2FiOGNiMzAtYzg1Yy00ZjUwLWEyOWMtYjVjOTcyYTkzMzM5OjZjMzM1MTZjLTk3OGMtNGU4YS1hZDBiLTMyYjUxMWQ0NzRkNg==';

  getAccessToken = () => {
    const RqUID = uuidv4();
    return axios.post(this.AUTH_URL, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
        RqUID,
        Authorization: `Basic ${this.AUTH_KEY}`,
      },
      body: {
        scope: 'GIGACHAT_API_PERS',
      },
    });
  };

  getAnswer = () => {
    return axios.post(this.BASE_URL, {
      headers: {
        Authorization: `Bearer ${this.AUTH_KEY}`,
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
      },
      body: {
        model: 'GigaChat-Max',
        messages: [
          {
            role: 'user',
            content:
              'Я нахожусь в компании друзей. Нас 5 человек. Нам скучно. Постарайся нам помочь, это очень важно для нас. Предложи 10 вариантов активностей для нас, используя следующие факты о нашем контексте: 1) у нас 3 часа свободного времени 2) сейчас ясная погода 3) сейчас ночь 4) у нас хорошее настроение 6) у нас нет денег 7) мы любим спорт 8) мы находимся в городе Грозный. Дай ответ на мой запрос в формате JSON.',
          },
        ],
        stream: false,
        update_interval: 0,
      },
    });
  };
}

export const aiSevice = new AIService();
