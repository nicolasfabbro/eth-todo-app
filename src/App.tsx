import { Routes, Route } from 'react-router-dom';
import { useMetaMaskAccount } from './providers/MetaMaskProvider';
import ProtectedRoute from './components/ProtectedRoute';
import WalletConnection from './pages/WalletConnection';
import List from './pages/List';

const App = () => {
  const { connectedAccount } = useMetaMaskAccount();
  
  return (
    <Routes>
      <Route index element={
        <ProtectedRoute isAllowed={!connectedAccount} redirectTo="/list">
          <WalletConnection />
        </ProtectedRoute>
      } />
      <Route path="list" element={
        <ProtectedRoute isAllowed={!!connectedAccount}>
          <List />
        </ProtectedRoute>
      } />
    </Routes>
  );
};

export default App;
