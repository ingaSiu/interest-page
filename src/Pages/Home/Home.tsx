import { ImageList, ImageListItem, LinearProgress } from '@mui/material';
import { useEffect, useState } from 'react';

import InfiniteScroll from 'react-infinite-scroll-component';
import { PixabayImage } from '../../Types/images';
import { uniqBy } from 'lodash';
import { useAppSelector } from '../../hooks/store';
import { useImages } from '../../hooks/images';

const Home = () => {
  const searchValue = useAppSelector((state) => state.search.value);
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [page, setPage] = useState(1);
  const [items, setItems] = useState<PixabayImage[]>([]);
  const { data, isLoading } = useImages(page, debouncedSearch);
  const images = data || [];

  useEffect(() => {
    setTimeout(() => {
      if (searchValue) {
        setDebouncedSearch(searchValue);
        setPage(1);
        setItems([]);
      }
    }, 1000);
  }, [page, searchValue]);

  // sujungiam du masyvus: sena ir nauja
  useEffect(() => {
    if (!isLoading) {
      setItems((prevItems) => uniqBy([...prevItems, ...images], (image) => image.id));
    }
  }, [images]);

  const fetchData = () => {
    setPage((prevPage) => prevPage + 1);
  };
  return (
    <InfiniteScroll
      dataLength={images.length}
      next={fetchData}
      style={{ display: 'flex', flexDirection: 'column' }} //To put endMessage and loader to the top.
      hasMore={true}
      loader={<LinearProgress />}
      scrollableTarget="scrollableDiv"
    >
      <ImageList variant="quilted" cols={5} gap={8}>
        {items.map((item) => (
          <ImageListItem key={item.previewURL}>
            <img
              src={`${item.webformatURL}?w=248&fit=crop&auto=format`}
              srcSet={`${item.webformatURL}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.id.toString()}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </InfiniteScroll>
  );
};

export default Home;
