import React, { useState } from 'react';

const ScrollButton = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            /* you can also use 'auto' behaviour
                in place of 'smooth' */
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <div className='App'>
            <div id="scroll-Top">
                <div className="return-to-top">
                    <i className="fa fa-angle-up " id="scroll-top" data-toggle="tooltip" data-placement="top" title="" data-original-title="Back to Top" aria-hidden="true" onClick={scrollToTop}
	style={{display: visible ? 'inline' : 'none'}}></i>
                </div>
            </div>
        </div>
    );
}

export default ScrollButton;
