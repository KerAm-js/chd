const express = require('express');
const axios = require('axios');
const uuidv4 = require('uuid').v4;
require('dotenv').config();

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

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

    console.log(1, userMessage);

    const GIGACHAT_API_URL =
      process.env.GIGACHAT_API_URL || 'https://gigachat.dev/api/v1/chat';
    const GIGACHAT_API_KEY = process.env.GIGACHAT_API_KEY;

    if (!GIGACHAT_API_KEY) {
      return res.status(500).send('API ключ для GigaChat не настроен');
    }

    const RqUID = uuidv4();

    console.log(2, RqUID);

    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
      RqUID: '9916fed8-cef0-42ce-b9ac-01d094346390',
      Authorization:
        'Basic N2FiOGNiMzAtYzg1Yy00ZjUwLWEyOWMtYjVjOTcyYTkzMzM5OjJjNmY3MmIwLTBiYjMtNDY1Yi05ZjhkLWI0MjFkNDk5ZDNiNQ==',
    };
    const data = 'scope=GIGACHAT_API_PERS';

    const tokenResponse = await axios({
      method: 'post',
      url: 'https://ngw.devices.sberbank.ru:9443/api/v2/oauth',
      headers: headers,
      data: data,
      maxRedirects: 10, // equivalent to -L/--location in curl
    });

    // const tokenResponse = await axios.post(
    //   'https://ngw.devices.sberbank.ru:9443/api/v2/oauth',
    //   { scope: 'GIGACHAT_API_PERS' },
    //   {
    //     headers: {
    //       'Content-Type': 'application/x-www-form-urlencoded',
    //       Accept: 'application/json',
    //     },
    //     params: {
    //       RqUID,
    //     },
    //   },
    // );

    //2c6f72b0-0bb3-465b-9f8d-b421d499d3b5

    // console.log(3, tokenResponse);

    // res.send(tokenResponse);
    res.send('ok');
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Ошибка при обращении к GigaChat API:', error.message);
    }
    res.status(500).send('Произошла ошибка при обработке запроса');
  }
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
