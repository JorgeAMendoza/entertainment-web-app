import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import LogOutModal from '../../components/LogOutModal';
import NavBar from '../../components/NavBar/NavBar';
import Styled from './Dashboard.styled';

type DashboardLocState = null | { token: string };

export const Dashboard = () => {
  const [token, setToken] = useState<null | string>(null);
  const location = useLocation();

  const state = location.state as DashboardLocState;

  useEffect(() => {
    if (state === null) return;
    else setToken(state.token);
  }, [state]);
  return (
    <>
      {!token ? (
        <LogOutModal />
      ) : (
        <Styled.Dashboard data-cy="dashboard">
          <NavBar />
          <div>
            <Outlet />
          </div>
        </Styled.Dashboard> 
      )}
    </>
  );
};

export default Dashboard;
