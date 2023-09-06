import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from './context/UserContext';

function App() {
  const contextValue = useContext(UserContext);
  const user = contextValue?.user;

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={user ? <Profile /> : <Navigate replace to="/login" />}
        />
      </Routes>
    </>
  );
}

export default App;
