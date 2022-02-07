import React from 'react';
import Token from './Token';

const Conversion = () => {
    const removeFirstToken = () => {
        console.log('Removing first token...');
    };

    return (
        <section className='conversion'>
            {/* Token 1 */}
            <Token
                conversionText='If you have:'
                tokenName='Bitcoin'
                removeToken={removeFirstToken}
                fallbackText='Please select the first token'
            />

            {/* Token 2 */}
            <Token
                conversionText='Then you will have:'
                tokenName='Etherium'
                removeToken={removeFirstToken}
                fallbackText='Please select the first token'
                disableInput={false}
            />
        </section>
    );
};

export default Conversion;
