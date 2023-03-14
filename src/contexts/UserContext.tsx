import { PropsWithChildren, createContext } from 'react';

import { User } from '../Types/user';
import { useLocalStorage } from '../hooks/localStorage';

const UserContext = createContext<{
  user: User | null;
  setUser: (user: User) => void;
  isLoggedIn: boolean;
  handleLogin: (user: User) => void;
  handleLogOut: () => void;
}>({
  user: null,
  setUser: () => {},
  isLoggedIn: false,
  handleLogin: () => {},
  handleLogOut: () => {},
});

const UserProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useLocalStorage<User | null>('user', null);

  const isLoggedIn = !!user;

  const handleLogOut = () => {
    setUser(null);
  };

  const handleLogin = (user: User) => {
    setUser(user);
  };

  return (
    <UserContext.Provider value={{ user, isLoggedIn, setUser, handleLogin, handleLogOut }}>
      {children}
    </UserContext.Provider>
  );
};
export { UserContext, UserProvider };
