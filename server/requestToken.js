const axios = require('axios');
const uuidv4 = require('uuid').v4;

const requestToken = async () => {
  if (!process.env.GIGACHAT_API_KEY) {
    return res.status(500).send('API ключ для GigaChat не настроен');
  }

  const RqUID = uuidv4();

  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    Accept: 'application/json',
    RqUID,
    Authorization: `Basic ${process.env.GIGACHAT_API_KEY}`,
  };
  const data = 'scope=GIGACHAT_API_PERS';

  return await axios({
    method: 'post',
    url: 'https://ngw.devices.sberbank.ru:9443/api/v2/oauth',
    headers,
    data,
    maxRedirects: 10, // equivalent to -L/--location in curl
  });
};

module.exports = {
  requestToken,
};
