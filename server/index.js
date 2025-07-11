const express = require('express');
const axios = require('axios');

const { requestToken } = require('./requestToken');
const { requestAnswer } = require('./requestAnswer');

require('dotenv').config();

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.text());

app.post('/ask-gigachat', async (req, res) => {
  try {
    const params = req.body;

    if (!params) {
      return res.status(400).send('Параметры отсутствуют');
    }

    const tokenResponse = await requestToken();
    const aiAnswer = await requestAnswer(
      params,
      tokenResponse.data.access_token,
    );
    res.send(aiAnswer.data.choices[0].message.content);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      res
        .status(500)
        .send('Ошибка при обращении к GigaChat API: ' + error.message);
    } else {
      res
        .status(500)
        .send('Произошла ошибка при обработке запроса' + error.message);
    }
  }
});

app.listen(port, () => {
  console.log(`Сервер запущен. Порт: ${port}`);
});
