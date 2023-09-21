import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://backendfoodexplorer-5pci.onrender.com/'
});
