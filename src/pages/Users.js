import React from 'react';
import Header from '../components/Header';
import UsersContainer from '../containers/UsersContainer';
import HeaderUser from '../components/HeaderUser';

const Users = () => {
    return(
        <>
            <Header />
            <HeaderUser />
            <UsersContainer/>
        </>
    )
}

export default Users;