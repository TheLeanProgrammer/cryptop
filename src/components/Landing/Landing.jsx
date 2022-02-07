import React from 'react';
import logo from './../../assets/landing.png';
import './Landing.css';

const Landing = () => {
    return (
        <section>
            <img className='landing-cover' src={logo} alt='landing-cover' />
        </section>
    );
};

export default Landing;
