import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
const Root = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) navigate('welcome');
    else {
      // verify the token later
      const parsedToken = JSON.parse(token) as string;
      navigate('/dashboard', { state: { token: parsedToken } });
    }
  }, []);

  return (
    <div id="router-root">
      <Outlet />
    </div>
  );
};

export default Root;
