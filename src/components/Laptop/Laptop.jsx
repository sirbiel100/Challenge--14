import React from 'react';
import './Laptop.css';
import LaptopDesktop from '/Users/lucas/challenge--14/src/images/illustration-laptop-desktop.svg'
import LaptopMobile from '/Users/lucas/challenge--14/src/images/illustration-laptop-mobile.svg'

function Laptop() {
    return (
        <div className='Laptop'>
            <div className="laptop-image">
                <img src={LaptopDesktop} alt="LaptopDesktop" />
                <img src={LaptopMobile} alt="LaptopMobile" />
            </div>
            <div className="laptop-text-content">
                <div className="first-latop-text-content">
                    <h3>Free, open, simple</h3>
                    <p>Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</p>
                </div>
                <div className="second-laptop-text-content">
                    <h3>Powerful tooling</h3>
                    <p>Batteries included. We built a simple and strightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.</p>
                </div>
            </div>
        </div>
    );
}

export default Laptop