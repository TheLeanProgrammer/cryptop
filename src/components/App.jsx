import React from 'react';
import Conversion from './Conversion/Conversion';
import CurrencyList from './Currencies/CurrencyList';
import Landing from './Landing/Landing';

const App = () => {
    return (
        <div className='app-container container'>
            {/* Section 1: Landing */}
            <Landing />

            {/* Section 2: Conversion */}
            <Conversion />

            {/* Section 3: Top currencies cards */}
            <CurrencyList />
        </div>
    );
};

export default App;
