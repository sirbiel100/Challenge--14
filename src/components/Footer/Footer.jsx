import React from 'react';
import './Footer.css';
import Logo from '/Users/lucas/challenge--14/src/images/logo.svg';


function Footer() {

    return(
        <div className='Footer'>
            <div className="footer-logo-content">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="footer-list-content">
                
                <div className="product">
                    <h3>Product</h3>
                    <ul>
                        <li>Overview</li>
                        <li>Pricing</li>
                        <li>Marketplace</li>
                        <li>Features</li>
                        <li>Integrations</li>
                    </ul>
                </div>

                <div className='Company'>
                    <h3>Company</h3>
                    <ul>
                        <li>About</li>
                        <li>Team</li>
                        <li>Blog</li>
                        <li>Careers</li>
                    </ul>

                </div>

                <div className='Connect'>
                    <h3>Connect</h3>
                    <ul>
                        <li>Contact</li>
                        <li>Newsletter</li>
                        <li>LinkedIn</li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default Footer;