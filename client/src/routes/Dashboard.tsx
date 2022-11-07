import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import LogOutModal from '../components/LogOutModal';
import NavBar from '../components/NavBar/NavBar';
import Homepage from './Homepage';

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
        <div data-cy="dashboard">
          <NavBar />
          {/* this will be the routes part righ there */}
          <div>
            <Homepage />
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
