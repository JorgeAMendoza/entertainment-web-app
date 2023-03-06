import { PageContainer } from '../../styles/utils/Container.styled';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const SuspenseFallback = () => {
  return (
    <PageContainer>
      <LoadingSpinner />
    </PageContainer>
  );
};

export default SuspenseFallback;
