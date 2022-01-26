import React from 'react';
import logo from './../../assets/landing.png';
import './Landing.css';

const Landing = () => {
    return (
        <section className='landing-container'>
            <div className='center-align'>
                <img className='landing-cover' src={logo} alt='landing-cover' />
            </div>
        </section>
    );
};

export default Landing;
