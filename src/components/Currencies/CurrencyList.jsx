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
        return (
            <CurrencyCard
                onCardClick={selectCurrency}
                coinName={currency.name}
                coinSymbol={currency.symbol}
                coinPrice={currency.price_usd}
                key={currency.id}
                active={isActive}
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
