import React from 'react';
import './header.css'
import Bluebtn from '../common/bluebtn';

const header = () => {
    return ( 
        <header>
            <article className='headercont'>
                <h2>CIB</h2>
                <h5 className='headertext'>Delivering value to our clients, our community and our shareholders</h5>
                <Bluebtn text2="Discover more"/>
            </article>
        </header>
     );
}
 
export default header;
