import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import extractToken from '../utils/extract-token';
import GlobalStyles from '../styles/Globa.styled';

const Root = () => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const token = extractToken();
    if (!token) {
      if (location.pathname === '/') navigate('/welcome');
      else navigate(location.pathname);
    } else {
      navigate('/dashboard', { state: { token } });
    }
  }, []);

  return (
    <div id="router-root">
      <GlobalStyles />
      <Outlet />
    </div>
  );
};

export default Root;
