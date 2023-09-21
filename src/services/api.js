import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://backend-foodexplorer-08sk.onrender.com'
});
