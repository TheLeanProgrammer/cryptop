import React from 'react';
import './Conversion.css';

const Conversion = () => {
    return (
        <section className='conversion'>
            <div className='coin-conversion-container'>
                <p className='conversion-text'>If you have:</p>
                <input
                    type='text'
                    className='coin-unit-input'
                    placeholder='Coin units'
                />
                <div className='coin-chip'>
                    <p className='selected-coin-name'>Bitcoin</p>
                    <i
                        onClick={() => console.log('CLICKED!!')}
                        className='close-icon close material-icons'
                    >
                        close
                    </i>
                </div>
            </div>
        </section>
    );
};

export default Conversion;
