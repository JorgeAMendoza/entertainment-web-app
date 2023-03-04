import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import extractToken from '../../utils/extract-token';
import GlobalStyles from '../../styles/Global.styled';
import RootStyled from './Root.styled';

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
    <RootStyled id="router-root">
      <GlobalStyles />
      <Outlet />
    </RootStyled>
  );
};

export default Root;