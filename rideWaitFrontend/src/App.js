import { useState } from 'react';

import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import WelcomeScreen from './components/WelcomeScreen';
import Login from './features/Login';
import Dasboard from './components/Dasboard';
import WaitTimes from './components/WaitTimes';
import SignUp from './features/SignUp';
import DashboardParks from './components/DashboardParksContainer';

import Rides from './components/Rides';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<WelcomeScreen />} />
        <Route path='login' element={<Login />} />
        <Route path='dashboard' element={<Dasboard />} />
        <Route path='dashboard/:name' element={<Rides />} />

        <Route path='signUp' element={<SignUp />} />
      </Route>
    </Routes>
  );
}

export default App;
