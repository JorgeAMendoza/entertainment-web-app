import { Outlet, useNavigate } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import Styled from './Dashboard.styled';
import { useVerifyTokenQuery } from '../../generated/graphql';

export const Dashboard = () => {
  const { error, loading } = useVerifyTokenQuery();
  const navigate = useNavigate();

  if (error) {
    localStorage.removeItem('ent-token');
    navigate('/login');
  }

  if (loading) return null;

  return (
    <>
      <Styled.Dashboard data-cy="dashboard">
        <NavBar />
        <div>
          <Outlet />
        </div>
      </Styled.Dashboard>
    </>
  );
};

export default Dashboard;
