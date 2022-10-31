import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import extractToken from '../utils/extract-token';
const Root = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = extractToken();
    if (!token) navigate('/welcome');
    else navigate('/dashboard', { state: { token } });
  }, []);

  return (
    <div id="router-root">
      <Outlet />
    </div>
  );
};

export default Root;
