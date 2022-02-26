import React from 'react';
import './Currency.css';
import CurrencyCard from './CurrencyCard';

const CurrencyList = ({
    allCurrencies,
    selectCurrency,
    selectedCurrencies,
}) => {
    const Card = allCurrencies.map((currency) => {
        const isActive = selectedCurrencies.some(
            (sc) => sc.currency.id === currency.id
        );
        const reachedLimit = selectedCurrencies.length === 2;
        return (
            <CurrencyCard
                currency={currency}
                onCardClick={selectCurrency}
                key={currency.id}
                active={isActive}
                reachedLimit={reachedLimit}
            />
        );
    });

    return (
        <div className='currency-list-container'>
            <h1 className='currency-section-heading'>
                Today's top 10 currencies
            </h1>

            <div className='crypto-cards-container'>{Card}</div>
        </div>
    );
};

export default CurrencyList;
