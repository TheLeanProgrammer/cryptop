import React from 'react';

const CurrencyCard = ({ coinName, coinSymbol, coinPrice }) => {
    return (
        <div className='crypto-card'>
            <img
                className='currency-logo'
                src={`https://cryptoicon-api.vercel.app/api/icon/${coinSymbol}`}
                alt='crypto-icon'
            />
            <div className='coin-name'>
                <span className='coin-name-title'>{coinName}</span>
                <span className='coin-symbol'>
                    &nbsp;{coinSymbol.toUpperCase()}
                </span>
            </div>
            <div className='coin-price'>
                <span className='coin-dollar'>$</span>
                <span className='coin-price-value'>{coinPrice}</span>
            </div>
        </div>
    );
};

export default CurrencyCard;
