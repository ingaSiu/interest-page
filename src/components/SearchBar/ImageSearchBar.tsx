import { useAppDispatch, useAppSelector } from '../../hooks/store';

import Searchbar from './SearchBar';
import { onChange } from '../../store/searchSlice';

const ImageSearchbar = () => {
  const value = useAppSelector((state) => state.search.value);
  const dispatch = useAppDispatch();
  return <Searchbar value={value} setValue={(value) => dispatch(onChange(value))} />;
};
export default ImageSearchbar;
