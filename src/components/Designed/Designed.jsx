import React from 'react';
import './Designed.css';
import EditorDesktop from '/Users/lucas/challenge--14/src/images/illustration-editor-desktop.svg';
import EditorMobile from '/Users/lucas/challenge--14/src/images/illustration-editor-mobile.svg';

function Designed() {

    return (
        <div className='Designed'>

                <div className='header-designed'>
                    <h2>Designed for the future</h2>
                </div>
                
                <div className='main-designed'>

                    <div className='text-main-designed'>
                        <div className='first-text-main-designed'>
                            <h3>Introducing an extensible editor</h3>
                            <p>Blogr features an exceedingly intuitive interface whichs lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, video, and Markdow. Etensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog</p>
                        </div>
                        <div className='second-text-main-designed'>
                            <h3>Robust content management</h3>
                            <p>Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you're in full control.</p>
                        </div>
                    </div>

                    <div className='images-main-designed'>
                        <img src={EditorDesktop} alt="Editor" />
                        <img src={EditorMobile} alt='Editor' />
                    </div>
                </div>

        </div>
    );
}

export default Designed