import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import EmployeeForm from './pages/EmployeeForm';

const currentYear = new Date().getFullYear();

function App() {
  return (
    <BrowserRouter>
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="container py-4 flex-grow-1">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/employee-form" element={<EmployeeForm />} />
          {/* Fallback route redirecting to dashboard */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="app-footer py-3 text-center mt-auto">
        <div className="container">
          <p className="mb-0">
            &copy; {currentYear} Employee Management Dashboard &bull; MERN Stack Assignment
          </p>
        </div>
      </footer>
    </BrowserRouter>
  );
}

export default App;
