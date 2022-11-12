import axios from 'axios';

const instanceContact = (axios.defaults.baseURL =
  'https://636e3b1eb567eed48ad7269a.mockapi.io/contacts/contacts');

export const getContacts = async () => {
  const response = await instanceContact.get('/contacts');
  return response.data;
};

export const addContacts = async data => {
  const response = await instanceContact.post('/contacts', data);
  return response.data;
};

export const removeContacts = async id => {
  const response = await instanceContact.delete(`/contacts/${id}`);
  return response.data;
};
