import React from "react";
import './Art.css';
import Phones from '/Users/lucas/challenge--14/src/images/illustration-phones.svg';
import Circles from '/Users/lucas/challenge--14/src/images/bg-pattern-circles.svg';


function Art() {
    
    return (
        <div className="Art">
            <div className="art-image-content">
                <img src={Phones} alt="Phones" />
                
            </div>
            <div className="art-text-content">
                <h2>State of the Art Infrastructure</h2>
                <p>With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
            </div>
        </div>
    );
}

export default Art