const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.text());

app.post('/ask-gigachat', async (req, res) => {
  try {
    const userMessage = req.body;

    if (!userMessage) {
      return res.status(400).send('Текст запроса отсутствует');
    }

    const GIGACHAT_API_URL =
      process.env.GIGACHAT_API_URL || 'https://gigachat.dev/api/v1/chat';
    const GIGACHAT_API_KEY = process.env.GIGACHAT_API_KEY;

    if (!GIGACHAT_API_KEY) {
      return res.status(500).send('API ключ для GigaChat не настроен');
    }

    const response = await axios.post(
      GIGACHAT_API_URL,
      {
        messages: [
          {
            role: 'user',
            content: userMessage,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${GIGACHAT_API_KEY}`,
          'Content-Type': 'application/json',
        },
      },
    );

    const gigachatResponse =
      response.data.choices?.[0]?.message?.content || 'Ответ не получен';

    res.send(gigachatResponse);
  } catch (error) {
    console.error('Ошибка при обращении к GigaChat API:', error);
    res.status(500).send('Произошла ошибка при обработке запроса');
  }
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
