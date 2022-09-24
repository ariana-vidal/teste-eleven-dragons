import { Route, Routes } from 'react-router-dom';
import { AllUsers } from '../pages/AllUsers';
import Register from '../pages/Register';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={ <AllUsers /> } />
      <Route path="/register" element={ <Register /> } />
    </Routes>
  )
}