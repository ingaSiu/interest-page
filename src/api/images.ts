import { PixabayImage } from '../Types/images';
import axios from 'axios';

const URL = 'https://pixabay.com/api';
const KEY = '34412175-0885be20bb5588c5c008fe206';

export const fetchImages = (page: number, search: string): Promise<PixabayImage[]> => {
  return axios.get(URL, { params: { key: KEY, page, q: search } }).then((response) => response.data.hits);
};
