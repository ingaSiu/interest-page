import Examples from '../Pages/Examples';
import Home from '../Pages/Home';
import MainLayout from '../Layout/MainLayout';
import PinPage from '../Pages/PinPage';

export const HOME_PATH = '/';
export const PIN_PAGE_PATH = '/pin/:id';
export const EXAMPLES_PATH = '/examples';

export const mainLayoutRoutes = {
  Layout: MainLayout,
  routes: [
    {
      path: HOME_PATH,
      Component: Home,
    },
    {
      path: PIN_PAGE_PATH,
      Component: PinPage,
    },
    {
      path: EXAMPLES_PATH,
      Component: Examples,
    },
  ],
};
