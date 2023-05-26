import React from 'react';
import './Hero.css';
import Logo from '/Users/lucas/challenge--14/src/images/logo.svg';
import Background from '/Users/lucas/challenge--14/src/images/bg-pattern-intro-desktop.svg';
import MobileBackground from '/Users/lucas/challenge--14/src/images/bg-pattern-intro-mobile.svg';

function Hero() {
    
    const connect = document.querySelector('#connect');
    const arrow = document.querySelector('#arrow-span');
    const infoBox = document.querySelector('#info');


    async function info() {
        arrow.classList.toggle('span-toggle');
        infoBox.classList.toggle('connect-toggle');
    
        if (window.innerWidth > 700) {
            connect.classList.toggle('underline');
        } else {};
        
    }

    async function HeaderMobile() {
        if (window.innerWidth <= 700){
        const menuMobile = document.querySelector('#menu-mobile');
        menuMobile.classList.toggle('Header-toggle');
        } else {};
    }

    

return (
    <div className='Hero'>
    
        <div className="nav">
            <img src={Logo} alt="Logo" className='logo' />     
            <div className='Header' id='menu-mobile'>
                <div className="left">
                    <ul>
                        <li>Product</li><span>{'>'}</span>
                        <li>Company</li><span>{'>'}</span>
                        <li id='connect' className='connect' onClick={info}>Connect</li><span id='arrow-span' onClick={info}>{'>'}</span>
                    </ul>
                    <div className='connect-info' id='info'>
                        <p>Contact</p>
                        <p>Newsletter</p>
                        <p>LinkedIn</p>
                    </div>
                </div>
                <div className="right">
                    <a href='#'>Login</a>
                    <button>Sign Up</button>
                </div>
            </div>
        <input type="checkbox" id="checkbox" />
        <label for="checkbox" className="toggle" onClick={HeaderMobile}>
            <div className="bars" id="bar1"></div>
            <div className="bars" id="bar2"></div>
            <div className="bars" id="bar3"></div>
        </label>
        </div>
        <div className="main-content">
            <div className="text-content">
                <h1>A modern publishing platform</h1>
                <p>Grow your audience and build your online brand</p>
            </div>
            <div className="main-buttons-content">
                <button>Start for Free</button>
                <button>Learn More</button>
            </div>
        </div>

        <img src={Background} alt='background-image' className='background-image' />
        <img src={MobileBackground} alt='mobile-background-image' className='mobile-background-image' />

    </div>
);


};

export default Hero