import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import WalletConnection from './pages/WalletConnection';
import List from './pages/List';

const App = () => (
  <div>
    <h1>To Do App</h1>

    <Routes>
      <Route index element={<WalletConnection />} />
      <Route path="list" element={
        <ProtectedRoute account="">
          <List />
        </ProtectedRoute>
      } />
    </Routes>
  </div>
);

export default App;
