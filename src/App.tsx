import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import WalletConnection from './pages/WalletConnection';
import List from './pages/List';

const App = () => {
  const account = '';
  return (
    <Routes>
      <Route index element={
        <ProtectedRoute isAllowed={!account} redirectTo="/list">
          <WalletConnection />
        </ProtectedRoute>
      } />
      <Route path="list" element={
        <ProtectedRoute isAllowed={!!account}>
          <List />
        </ProtectedRoute>
      } />
    </Routes>
  );
};

export default App;
