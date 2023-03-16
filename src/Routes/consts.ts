import { AuthLayoutRoutes, MainLayoutRoutes } from './routeTypes';

import AuthLayout from '../Layout/AuthLayout';
import Examples from '../Pages/Examples';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import MainLayout from '../Layout/MainLayout';
import PinPage from '../Pages/PinPage';

export const LOGIN_PATH = '/';

export const HOME_PATH = '/';
export const PIN_PATH = '/:id';
export const EXAMPLES_PATH = '/examples';

export const mainLayoutRoutes: MainLayoutRoutes = {
  Layout: MainLayout,
  routes: [
    { path: HOME_PATH, Component: Home },
    { path: PIN_PATH, Component: PinPage },
    { path: EXAMPLES_PATH, Component: Examples },
  ],
};

export const authLayoutRoutes: AuthLayoutRoutes = {
  Layout: AuthLayout,
  routes: [{ path: LOGIN_PATH, Component: Login }],
};
