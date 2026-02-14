import React from 'react';
import './footer.css'
import Navbtn from '../common/navbtn';

const footer = () => {
    return ( <>
    <footer>
        <div className='footer1'>
            <div className='footer1div'>
                <div className='footer1pic'>
                    <div className='divf1'>
                        <div className='divf2'>
                            <div className='logofooter'></div>
                            <div className="linksdiv">
                                <div className="column">
                                    <Navbtn text="FAQs"/>
                                    <Navbtn text="Learning Center"/>
                                    <Navbtn text="Fees & Charges"/>
                                    <Navbtn text="Terms & Conditions"/>
                                </div>
                                <div className="column">
                                    <Navbtn text="Local"/>
                                    <Navbtn text="Abroad"/>
                                    <Navbtn text="Business"/>
                                    <Navbtn text="Corporate"/>
                                </div>
                                <div className="column">
                                    <Navbtn text="Careers"/>
                                    <Navbtn text="Why CIB"/>
                                    <Navbtn text="Email us"/>
                                    <Navbtn text="System Status"/>
                            
                                </div>
                            </div>
                            <div className='fdiv3'>
                                <div className='googleplay'></div>
                                <div className='applepay'></div>
                            </div>

                        </div>
                        <div className='creditsdiv'>
                            <div className='cdiv1'>
                                <Navbtn text="CBE Approvals"/>
                                <Navbtn text="Cookie Policy"/>
                                <Navbtn text="Privacy Policy"/>
                                <Navbtn text="User Agreements"/>
                         
                            </div>
                            <div className='footerdiv2'>
                                <div className='socials face'></div>
                                <div className='socials insta'></div>
                                <div className='socials in'></div>
                                <div className='socials yout'></div>
                                <div className='socials twi'></div>
                                <div className='socials whats'></div>
                            </div>
                        </div>
                    </div>
                    
                </div>
               <div className='fdiv2'>
                    <h1 className='copyright'>Copyright © 2025 Commercial International Bank</h1>
               </div>
            </div>
        </div>
    </footer>
    </> );
}
 
export default footer;