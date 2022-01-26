import React from 'react';
import logo from './../assets/landing.png';
import './App.css';

const App = () => {
    return (
        <div className='app-container container'>
            {/* Section 1: Landing */}
            <section className='landing-container'>
                <div className='center-align'>
                    <img
                        className='landing-cover'
                        src={logo}
                        alt='landing-cover'
                    />
                </div>
            </section>

            {/* Section 2: Conversion */}

            {/* Section 3: Top currencies card */}
        </div>
    );
};

export default App;
