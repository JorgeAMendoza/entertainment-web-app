import NavBar from '../components/NavBar/NavBar';
import Homepage from './Homepage';

export const Dashboard = () => {
  return (
    <div data-testid="dashboard">
      <NavBar />
      {/* this will be the routes part righ there */}
      <div>
        <Homepage />
      </div>
    </div>
  );
};

export default Dashboard;
