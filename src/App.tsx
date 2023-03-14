import Routes from './Routes/Routes';
import { UserProvider } from './contexts/UserContext';

const App = () => {
  return (
    <UserProvider>
      <Routes />
    </UserProvider>
  );
};

export default App;

