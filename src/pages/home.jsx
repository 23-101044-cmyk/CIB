import React from 'react';
import './home.css'
import Nav from '../components/layout/nav';
import Header from '../components/layout/header';
import Footer from './../components/layout/footer';
import S2cards from '../components/common/s2cards';
import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png';
import card3 from '../assets/card3.png';
import Bluebtn from '../components/common/bluebtn';
import Menutext from './../components/common/menutext'
import Spacetitle from './../components/common/spacetitle'
import Orangetext from './../components/common/orangetext'
import Apply from './../components/common/apply'
import cib from '../components/assets/cibIcon [online-banking-12].svg'
import cardd from '../components/assets/carddddIcon [phone-banking-1].svg'
import loan from '../components/assets/loanIcon [online-banking-17].svg'


const home = () => {
    return ( 
        <body>
            <Nav />
            <Header />
            
            <main>

                <section className='menus1'>
                <div className='menudiv'>
                    <Menutext text3="Apply Online"/>
                    <Menutext text3="News"/>
                    <Menutext text3="Blog Articles"/>
                    <Menutext text3="CIB International"/>
                    <Menutext text3="Sustainable Finance"/>
                    <Menutext text3="Awards"/>
                    
                </div>
            </section>
            <section className='section1'>
                <Spacetitle text4="Apply Online"/>
                <div className='orangedivpad'>
                    <Orangetext text5=" Apply online now for cards and loans with ease!"/>
                </div>
                <div className='applymaindiv'>
                    <Apply 
                    icon1={cib}
                    text7="Apply for a New Account"
                    />
                     <Apply 
                    icon1={cardd}
                    text7="Apply for a card"
                    />
                     <Apply 
                    icon1={loan}
                    text7="Apply for a loan or overdraft"
                    />
                </div>
            </section>

                <section className='s2'>
                    <article className='s2cont'>
                        <Orangetext text5="Learning Center"/>
                        <h5 className='s2sub'>Learn more about banking and your finances</h5>
                        <div className='s2cards'>
                            <S2cards 
                            image={card1}
                            title="Buying and making a home"
                            text6="Buying a home can be an emotional process, but it's important to approach it logically"
                            />

                            <S2cards 
                            image={card2}
                            title="Traveling on a budget"
                            text6="So for all of you travelers, take a vacation without spending a fortune with these helpful tips and tricks:"
                            />

                            <S2cards 
                            image={card3}
                            title="University life tips"
                            text6="The impact of a good education can be transformative."
                            />
                        </div>
                        <Bluebtn text2="View more"/>
                    </article>
                </section>
            </main>
            
            <Footer />
        </body>
     );
}
 
export default home;