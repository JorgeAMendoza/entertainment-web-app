import NavBar from '../components/NavBar/NavBar';
import Homepage from './Homepage';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface DashboardProps {
  token: string;
}

export const Dashboard = () => {
  const location = useLocation();
  const { token } = location.state as DashboardProps;

  useEffect(() => {
    if (!token) console.log('throw error navigation here');
    console.log(token);
  }, [token]);

  return (
    <div data-cy="dashboard">
      <NavBar />
      {/* this will be the routes part righ there */}
      <div>
        <Homepage />
      </div>
    </div>
  );
};

export default Dashboard;
