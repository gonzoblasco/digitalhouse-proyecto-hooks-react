import { Navigate, Route, Routes } from 'react-router-dom';
import { NavBarComponent } from './components/NavBarComponent';

import { AboutScreen } from './routes/AboutScreen';
import { ContactScreen } from './routes/ContactScreen';
import { HomeScreen } from './routes/HomeScreen';
import { LoginScreen } from './routes/LoginScreen';

import { UserProvider } from './context/UserProvider';

export const App = () => {
  return (
    <UserProvider>
      <NavBarComponent />

      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/about' element={<AboutScreen />} />
        <Route path='/contact' element={<ContactScreen />} />
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/*' element={<Navigate to='/' />} />
      </Routes>
    </UserProvider>
  );
};
