import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://backend-foodexplorer-05g4.onrender.com/'
});
