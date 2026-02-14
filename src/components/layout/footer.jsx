import React from 'react';
import './footer.css'

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
                                    <p className="link-text">FAQs</p>
                                    <p className="link-text">Learning Center</p>
                                    <p className="link-text">Fees & Charges</p>
                                    <p className="link-text">Terms & Conditions</p>
                                </div>
                                <div className="column">
                                    <p className="link-text">Local</p>
                                    <p className="link-text">Abroad</p>
                                    <p className="link-text">Business</p>
                                    <p className="link-text">Corporate</p>
                                </div>
                                <div className="column">
                                    <p className="link-text">Careers</p>
                                    <p className="link-text">Why CIB</p>
                                    <p className="link-text">Email us</p>
                                    <p className="link-text">System Status</p>
                                </div>
                            </div>
                            <div className='fdiv3'>
                                <div className='googleplay'></div>
                                <div className='applepay'></div>
                            </div>

                        </div>
                        <div className='creditsdiv'>
                            <div className='cdiv1'>
                                <p className="link-text">CBE Approvals</p>
                                <p className="link-text">Cookie Policy</p>
                                <p className="link-text">Privacy Policy</p>
                                <p className="link-text">User Agreements</p>
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
               
            </div>
        </div>
    </footer>
    </> );
}
 
export default footer;