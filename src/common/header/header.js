import React from 'react';
import './header.css'
import Head from './head.js';
import Search from './search.js';
import Navbar from './navbar.js';

const Header = ({cartItems}) => {
    return ( 
        <>
            <Head />
            <Search cartItems={cartItems} />
            <Navbar />
        </>
     );
}
 
export default Header;