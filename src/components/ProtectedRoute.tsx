import { FC, ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

type Props = {
  account: string;
  children: ReactElement;
};

const ProtectedRoute: FC<Props> = ({ account, children }) => {
  if (!account) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
