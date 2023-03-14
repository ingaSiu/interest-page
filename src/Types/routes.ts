export type Route = {
  path: '/' | '/pin/:id' | '/examples';
  Component: () => JSX.Element;
};
