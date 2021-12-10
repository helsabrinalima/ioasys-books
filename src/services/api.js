import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://books.ioasys.com.br/api/v1'
});

export async function LoginRequest(email, password) {
  const api = await instance.post('/auth/sign-in', {
    email,
    password,
  })
  return api
}

export async function BooksRequest(page) {
  const api = await instance.get(`/books?page=${page}&amount=12&category=biographies`, {
    headers: {
      Authorization: defaults.headers.Authorization,
    },
  })
  
  return api
}

export const defaults = {
  headers: {
    Authorization: '',
  },
};

