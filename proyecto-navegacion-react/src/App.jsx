import { Navigate, Route, Routes } from 'react-router-dom';
import { NavBarComponent } from './components/NavBarComponent';

import { AboutScreen } from './routes/AboutScreen';
import { ContactScreen } from './routes/ContactScreen';
import { HomeScreen } from './routes/HomeScreen';

export const App = () => {
  return (
    <>
      <NavBarComponent />

      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/contact' element={<ContactScreen />} />
        <Route path='/about' element={<AboutScreen />} />
        <Route path='/*' element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
