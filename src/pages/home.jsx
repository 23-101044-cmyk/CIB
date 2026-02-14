import React from 'react';
import './home.css'
import Nav from '../components/layout/nav';
import Header from '../components/layout/header';
import Footer from './../components/layout/footer';

const home = () => {
    return ( 
        <body>

            <Nav />
            <Header />
            <main>
                <div className='menus1'></div>
            </main>
            <Footer />


        </body>
     );
}
 
export default home;