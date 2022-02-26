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

    const unitsOfToken1 =
        selectedCurrencies.length > 0 ? selectedCurrencies[0].units : 0;
    useEffect(() => {
        console.log('Selected currencies were changed', selectedCurrencies);
        if (selectedCurrencies.length < 2) return;

        /**
         * If two currencies are already selected
         * Update the units of second one based on first one
         * number of c2 = (number of c1) * ((cost of c1)/(cost of c2))
         */
        const c1 = selectedCurrencies[0].currency.price_usd;
        const c2 = selectedCurrencies[1].currency.price_usd;
        const n1 = selectedCurrencies[0].units;
        const n2 = (n1 * c1) / c2;

        setSelectedCurrencies([
            selectedCurrencies[0],
            {
                currency: selectedCurrencies[1].currency,
                units: n2,
            },
        ]);
    }, [unitsOfToken1]);

    const selectCurrency = (currency) => {
        console.log('Selecting currency', currency.name);
        if (selectedCurrencies.length < 2) {
            // TODO - check the units of first currency and auto update 2nd units for a new 2nd currency selection
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

    const removeSelectedCurrency = (index) => {
        console.log('Truing to remove', index);
        // Splice method causes array mutation - we should never update the state directly
        const newSelectedCurrencies = [...selectedCurrencies];
        newSelectedCurrencies.splice(index, 1);
        setSelectedCurrencies(newSelectedCurrencies);
    };

    return (
        <div className='app-container'>
            {/* Section 1: Landing */}
            <Landing />

            {/* Section 2: Conversion */}
            <Conversion
                onRemoveSelectedCurrency={removeSelectedCurrency}
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
