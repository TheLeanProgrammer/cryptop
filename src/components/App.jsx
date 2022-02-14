import React, { useEffect, useState } from 'react';
import Conversion from './Conversion/Conversion';
import CurrencyList from './Currencies/CurrencyList';
import Landing from './Landing/Landing';
import './App.css';

const App = () => {
    const [allCurrencies, setAllCurrencies] = useState([]);

    useEffect(() => {
        // Fetch all currencies as soon as the app loads
        const fetchCurrencies = async () => {
            const apiResponse = await fetch(
                'https://api.coinlore.net/api/tickers/?start=0&limit=10'
            );
            const { data } = await apiResponse.json();

            setAllCurrencies(data);
        };

        fetchCurrencies();
    }, []);

    return (
        <div className='app-container'>
            {/* Section 1: Landing */}
            <Landing />

            {/* Section 2: Conversion */}
            <Conversion />

            {/* Section 3: Top currencies cards */}
            <CurrencyList allCurrencies={allCurrencies} />
        </div>
    );
};

export default App;
