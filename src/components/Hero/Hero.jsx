import React, { useState } from 'react';
import './Hero.css';
import Logo from '/Users/lucas/challenge--14/src/images/logo.svg';
import Background from '/Users/lucas/challenge--14/src/images/bg-pattern-intro-desktop.svg';
import MobileBackground from '/Users/lucas/challenge--14/src/images/bg-pattern-intro-mobile.svg';

function Hero() {
    const [isInfoVisible, setIsInfoVisible] = useState(false);
    const [isArrowVisible, setIsArrowVisible] = useState(false);
    const [isConnectUnderlined, setIsConnectUnderlined] = useState(false);
    const [isMenuMobileVisible, setIsMenuMobileVisible] = useState(false);

    function toggleInfo() {
    setIsArrowVisible(!isArrowVisible);
    setIsInfoVisible(!isInfoVisible);

    if (window.innerWidth > 700) {
        setIsConnectUnderlined(!isConnectUnderlined);
    }
    }

    function toggleHeaderMobile() {
    if (window.innerWidth <= 700) {
        setIsMenuMobileVisible(!isMenuMobileVisible);
    }
}


return (
    <div className='Hero'>
    
        <div className="nav">
            <img src={Logo} alt="Logo" className='logo' />     
            <div className={`Header ${isMenuMobileVisible ? 'Header-toggle' : ''}`} id='menu-mobile'>
                <div className="left">
                    <ul>
                        <li>Product</li><span>{'>'}</span>
                        <li>Company</li><span>{'>'}</span>
                        <li id='connect' className={`connect ${isConnectUnderlined ? 'underline' : ''}`} onClick={toggleInfo}>Connect</li> <span id='arrow-span' className={`arrow-span ${isArrowVisible ? 'span-toggle' : ''}`} onClick={toggleInfo}>{'>'}</span>
                    </ul>
                    <div className={`connect-info ${isInfoVisible ? 'connect-toggle' : ''}`} id='info'>
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
        <label for="checkbox" className="toggle" onClick={toggleHeaderMobile}>
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