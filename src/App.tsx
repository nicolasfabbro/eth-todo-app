import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import WalletConnection from './pages/WalletConnection';
import List from './pages/List';

const App = () => {
  const account = '';
  return (
    <div>
      <h1>To Do App</h1>
  
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
    </div>
  );
};

export default App;
