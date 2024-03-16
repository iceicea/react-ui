import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Navbar from './components/navbar/Navbar';
import RightBar from './components/rightBar/RightBar';
import LeftBar from './components/leftBar/LeftBar';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import { useContext } from 'react';
import './style.scss';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from 'react-router-dom';
import { DarkModeContext } from './context/darkModeContext';
import { AuthContext } from './context/authContext';
function App() {
  const { currentUser } = useContext(AuthContext);
  const { darkMode } = useContext(DarkModeContext);
  console.log(darkMode);
  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? 'dark' : 'light'}`}>
        <Navbar />
        <div style={{ display: 'flex' }}>
          <LeftBar></LeftBar>
          <div style={{ flex: 6 }}>
            <Outlet></Outlet>
          </div>
          <RightBar></RightBar>
        </div>
      </div>
    );
  };
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="login"></Navigate>;
    }
    return children;
  };
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <ProtectedRoute>
          <Layout></Layout>
        </ProtectedRoute>
      ),
      children: [
        {
          path: '/',
          element: <Home></Home>,
        },
        {
          path: '/profile/:id',
          element: <Profile></Profile>,
        },
      ],
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
