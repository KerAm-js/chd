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

    console.log(1, params.query)
    const tokenResponse = await requestToken();
    console.log(2, tokenResponse.data);
    const aiAnswer = await requestAnswer(
      params.query,
      tokenResponse.data.access_token,
    );
    console.log(3, aiAnswer.data);
    res.send(JSON.parse(aiAnswer.data.choices[0].message.content));
  } catch (error) {
    console.log(4, error.message);
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
