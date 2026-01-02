import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/Mainlayout';
import GetAllTutors from './components/pages/GetAllTutors';
import Signin from './components/pages/Signin';
import Signup from './components/pages/Signup';
import MyTutors from './components/pages/MyTutors';
import ProtectedRoute from './components/auth/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* Public Routes */}
        <Route index element={<GetAllTutors />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="my-tutors" element={<MyTutors />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;