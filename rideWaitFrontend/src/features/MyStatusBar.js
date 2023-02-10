// MyStatusBar.js
import React from 'react';
import { StatusBar } from 'react-native-web';

const MyStatusBar = ({ currentPage }) => {
  let backgroundColor;
  if (currentPage === 'Welcome') {
    backgroundColor = '#24304D';
  } else if (currentPage === 'Login/Signup') {
    backgroundColor = '#3081FD';
  }
  return <StatusBar backgroundColor={backgroundColor} />;
};

export default MyStatusBar;
