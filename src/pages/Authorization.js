import React from 'react';
import Header from '../components/Header';
import HeaderSchedule from '../components/HeaderSchedule';
import AuthorizationContainer from '../containers/AuthorizationContainer';

const Authorization = () => {
  
  return(
    <>
      <Header/>
      <HeaderSchedule />
      <AuthorizationContainer/>
    </>
  );
}

export default Authorization;