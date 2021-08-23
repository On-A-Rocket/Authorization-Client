import React from 'react';
import WorkContainer from '../containers/WorkContainer';
import Header from '../components/Header';
import HeaderSchedule from '../components/HeaderSchedule';


const Work = () => {

    return(
      <>
        <Header />
        <HeaderSchedule/>
        <WorkContainer/>
      </>
    )
}

export default Work;