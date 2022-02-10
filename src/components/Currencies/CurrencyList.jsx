import React from 'react';
import './Currency.css';

const CurrencyList = () => {
    return (
        <div className='currency-list-container'>
            <h1 className='currency-section-heading'>
                Today's top 10 currencies
            </h1>

            <div className='crypto-cards-container'>
                <div className='crypto-card'>
                    <img
                        className='currency-logo'
                        src='https://cryptoicon-api.vercel.app/api/icon/usdt'
                        alt='crypto-icon'
                    />
                    <div className='coin-name'>
                        <span className='coin-name-title'>Bitcoin </span>
                        <span className='coin-symbol'>&nbsp;BTC</span>
                    </div>
                    <div className='coin-price'>
                        <span className='coin-dollar'>$</span>
                        <span className='coin-price-value'>37543.2</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrencyList;
