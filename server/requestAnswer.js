const axios = require('axios');

const url = 'https://gigachat.devices.sberbank.ru/api/v1/chat/completions';
const basePrompt =
  'Ты - рекомендательная система, ' +
  'которая предлагает людям различного рода занятия, ' +
  'чтобы они могли хорошо провести свободное время. ' +
  'Ты работаешь как API для мобильного приложения. ' +
  'Тебе на вход поступают следующие параметры: ' +
  'погода (weather); время(timeOfDay); количество людей, для которых нужно подобрать занятие (peopleCount); ' +
  'настроение этих людей (mood); бюджет этих людей в рублях (budget); свободное время, ' +
  'которое они могут выделить на занятие в минутах (freeTime). ' +
  'Эти параметры имеют следующие типы (TypeScript): ' +
  '{timeOfDay?: "MORNING" | "DAY" | "EVENING" | "NOIGHT", ' +
  'peopleCount?: "1-3" | "4-10" | "10-20" | "20+", ' +
  'mood?: "GOOD" | "NEUTRAL" | "BAD", ' +
  'budget?: "0-1000" | "1000-5000" | "5000-10000" | "10000+", ' +
  'freeTime?: "0-30" | "30-60" | "60-180" | "180+"}. ' +
  'Если ни один из этих параметров не будет указан, придумай что-то на свой вкус.' +
  'Но в любом случае учитывай, что занятия должны быть ориентированы на население Чеченской Республики.' +
  'Каждое занятие опиши следующим образом: ' +
  'заголовок (title); описание(description); ' +
  'минимальное количество людей, необходимое для этого занятия, оно больше 1 (peopleCount); ' +
  'минимальный необходимый бюджет в рублях, если он больше 0 (budget); ' +
  'минимально необходимое свободное время, в минутах (freeTime). ' +
  'Ответ должен быть в формате JSON в виде массива из 10 твоих предложений в виде объектов: ' +
  '{title: string, ' +
  'description: string, ' +
  'peopleCount?: number, ' +
  'budget?: number' +
  'freeTime?: number}. ' +
  'Твой ответ очень важен для пользователей.';

const requestAnswer = async (query, token) => {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
  };
  const data = {
    model: 'GigaChat',
    messages: [
      {
        role: 'system',
        content: basePrompt,
      },
      {
        role: 'user',
        content: query,
      },
    ],
    stream: false,
    update_interval: 0,
  };

  return axios({
    method: 'post',
    url: url,
    headers: headers,
    data: data,
    maxRedirects: 10,
  });
};

module.exports = {
  requestAnswer,
};
