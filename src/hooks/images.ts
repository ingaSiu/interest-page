import { PixabayImage } from '../Types/images';
import { fetchImages } from '../api/images';
import { useQuery } from '@tanstack/react-query';

const IMAGES = 'IMAGES';

export const useImages = (page: number) => {
  return useQuery<PixabayImage[], Error>([IMAGES, page], () => fetchImages(page));
};
