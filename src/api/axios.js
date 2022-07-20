import axios from 'axios';

const request = axios.create({
  baseURL: `https://retoolapi.dev/geeOvB/data`,
});

const getData = async () => {
  const results = await request.get();
  return results.data;
};

const getDataFilter = async (categorys, text) => {
  const results = await request.get(`?${categorys}=${text}`);
  return results.data;
};

const postDataAdd = async (data) => {
  const results = await request.post(null, { data });
  return results.data;
};

export { getData, getDataFilter, postDataAdd };
