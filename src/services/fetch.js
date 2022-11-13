import axios from 'axios';

const BASE_URL = 'https://636e3b1eb567eed48ad7269a.mockapi.io/';

const instanceContacts = axios.create({
  baseURL: `${BASE_URL}`,
});

export const getContacts = async () => {
  const { data } = await instanceContacts.get('/contacts');
  return data;
};

export const addContacts = async data => {
  const { data: result } = await instanceContacts.post('/contacts', data);
  return result;
};

export const removeContacts = async id => {
  const { data } = await instanceContacts.delete(`/contacts/${id}`);
  return data;
};
