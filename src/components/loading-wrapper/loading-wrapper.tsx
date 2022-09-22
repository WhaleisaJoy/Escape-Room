import Loading from '../loading/loading';

type LoadingWrapperProps = {
  isLoad: boolean,
  children: JSX.Element,
};

const LoadingWrapper = ({isLoad, children}: LoadingWrapperProps): JSX.Element => {
  return (isLoad && children) || <Loading />;
};

export default LoadingWrapper;
