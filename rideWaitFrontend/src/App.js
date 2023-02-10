import { useState } from 'react';

import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import WelcomeScreen from './components/WelcomeScreen';
import Login from './features/Login';
import Dasboard from './components/Dasboard';
import WaitTimes from './components/WaitTimes';
import SignUp from './features/SignUp';

function Background({ children }) {
  return <div className='bg-primary h-screen'>{children}</div>;
}

function App() {
  return (
    <Background>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<WelcomeScreen />} />
          <Route path='login' element={<Login />} />
          <Route path='signUp' element={<SignUp />} />
        </Route>
      </Routes>
    </Background>
  );
}

export default App;
