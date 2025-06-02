import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Dashboard from './pages/Dashboard';
import FamilyTreePage from './pages/FamilyTreePage';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/family/:id" element={<FamilyTreePage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
