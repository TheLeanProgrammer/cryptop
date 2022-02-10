import React from 'react';
import './Currency.css';
import CurrencyCard from './CurrencyCard';

const CurrencyList = () => {
    return (
        <div className='currency-list-container'>
            <h1 className='currency-section-heading'>
                Today's top 10 currencies
            </h1>

            <div className='crypto-cards-container'>
                <CurrencyCard
                    coinName='Bitcoin'
                    coinSymbol='btc'
                    coinPrice='43218.78'
                />
            </div>
        </div>
    );
};

export default CurrencyList;
