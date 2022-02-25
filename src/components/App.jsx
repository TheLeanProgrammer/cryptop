import React, { useEffect, useState } from 'react';
import Conversion from './Conversion/Conversion';
import CurrencyList from './Currencies/CurrencyList';
import Landing from './Landing/Landing';
import './App.css';

/**
 * Selected Currency Schema
 * [
 *  {
 *      currency: Currency,
 *      units: number
 *  },
 *  {
 *      Currency: Currency,
 *      units: number
 *  }
 * ]
 */
const App = () => {
    const [allCurrencies, setAllCurrencies] = useState([]);
    const [selectedCurrencies, setSelectedCurrencies] = useState([]);

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

    const selectCurrency = () => {
        console.log('Thanks for pressing it!');
    };

    return (
        <div className='app-container'>
            {/* Section 1: Landing */}
            <Landing />

            {/* Section 2: Conversion */}
            <Conversion selectedCurrencies={selectedCurrencies} />

            {/* Section 3: Top currencies cards */}
            <CurrencyList
                selectedCurrencies={selectedCurrencies}
                selectCurrency={selectCurrency}
                allCurrencies={allCurrencies}
            />
        </div>
    );
};

export default App;
