import Style from './LoadingSpinner.styled';

const LoadingSpinner = () => {
  return (
    <Style.LoadingSpinner>
      <Style.Spinner>{/* spinner here */}</Style.Spinner>
      <Style.Text>Loading content...</Style.Text>
    </Style.LoadingSpinner>
  );
};

export default LoadingSpinner;
