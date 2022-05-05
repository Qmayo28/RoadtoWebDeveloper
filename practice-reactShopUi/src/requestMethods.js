import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).currentUser
//     .accessToken || '';

// const user = JSON.parse(localStorage.getItem('persist:root'))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user)
//   .currentUser.accessToken;

const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjU3NTA3OTY2ZWNiMmFiOTUzNTUyOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NzczOTIxNywiZXhwIjoxNjQ3OTk4NDE3fQ.gO_XBNgSYinEhcgHQSFO6IhfkmN89BhsfK3SZ7d1jHY';

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
