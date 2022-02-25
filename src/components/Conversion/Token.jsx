import React from 'react';
import './Conversion.css';
import close from './../../assets/close.png';

const Token = ({
    currency,
    units,
    conversionText,
    removeToken,
    fallbackText,
    disableInput = false,
}) => {
    const tokenName = currency.name;

    return (
        <div className='coin-conversion-container'>
            {tokenName ? (
                <>
                    <p className='conversion-text'>{conversionText}</p>
                    <input
                        type='number'
                        className='coin-unit-input'
                        placeholder='Units'
                        disabled={disableInput}
                        value={units}
                    />
                    <div className='coin-chip'>
                        <p className='selected-coin-name'>{tokenName}</p>
                        <span
                            onClick={removeToken}
                            className='close-icon close material-icons'
                        >
                            <img src={close} alt='close-btn' />
                        </span>
                    </div>
                </>
            ) : (
                <p className='conversion-text'>{fallbackText}</p>
            )}
        </div>
    );
};

export default Token;
