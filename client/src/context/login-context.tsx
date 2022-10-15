import {
  createContext,
  ReactNode,
  useContext,
  useState,
  Dispatch,
} from 'react';

interface LoginContextProps {
  token: string | null;
  setToken: Dispatch<string>;
}

interface LoginProviderProps {
  children: ReactNode;
}

export const LoginContext = createContext({} as LoginContextProps);

export const useLoginContext = () => {
  const { token, setToken } = useContext(LoginContext);

  return { token, setToken };
};

const LoginProvider = ({ children }: LoginProviderProps) => {
  const [token, setToken] = useState<string | null>(null);

  return (
    <LoginContext.Provider value={{ token, setToken }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
