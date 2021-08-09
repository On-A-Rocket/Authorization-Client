import React from 'react';
import VacationModal from '../components/VacationModal';
import { ModalProvider } from '../context/ModalContext';
import Component from '../context/Component';
import Header from '../components/Header';

const Home = () => {

    return(
        <div>
            <Header />
            <p>홈이에용</p>
        </div>
    )
}
export default Home;