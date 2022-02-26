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

    useEffect(() => {
        // Add some token 2 unit update logic here
        console.log('Selected currencies were changed', selectedCurrencies);
    }, [selectedCurrencies]);

    const selectCurrency = (currency) => {
        console.log('Selecting currency', currency.name);
        // TODO: Add some currency conversion logic here
        if (selectedCurrencies.length < 2) {
            setSelectedCurrencies([
                ...selectedCurrencies,
                { currency, units: 0 },
            ]);
        } else {
            alert('You can only select 2 currencies at a time.');
        }
    };

    const onUpdateUnits = (units) => {
        // Note - we can only update the units of the first currency
        console.log('Updating the units of first currency to ', units);
        if (selectedCurrencies.length === 0) return;
        else if (selectedCurrencies.length === 1) {
            setSelectedCurrencies([
                { currency: selectedCurrencies[0].currency, units },
            ]);
        } else {
            setSelectedCurrencies([
                {
                    currency: selectedCurrencies[0].currency,
                    units,
                },
                selectedCurrencies[1],
            ]);
        }
    };

    return (
        <div className='app-container'>
            {/* Section 1: Landing */}
            <Landing />

            {/* Section 2: Conversion */}
            <Conversion
                onUpdateUnits={onUpdateUnits}
                selectedCurrencies={selectedCurrencies}
            />

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
