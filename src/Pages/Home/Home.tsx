import { ImageList, ImageListItem, LinearProgress } from '@mui/material';
import { useEffect, useState } from 'react';

import InfiniteScroll from 'react-infinite-scroll-component';
import { PixabayImage } from '../../Types/images';
import { uniqBy } from 'lodash';
import { useAppSelector } from '../../hooks/store';
import useDebounce from '../../hooks/useDebounce';
import { useImages } from '../../hooks/images';

const Home = () => {
  const searchValue = useAppSelector((state) => state.search.value);
  const debouncedSearch = useDebounce(searchValue);
  const [page, setPage] = useState(1);
  const [items, setItems] = useState<PixabayImage[]>([]);
  const { data, isLoading } = useImages(page, debouncedSearch);
  const images = data || [];

  useEffect(() => {
    if (searchValue) {
      setPage(1);
      setItems([]);
    }
  }, [searchValue]);

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
