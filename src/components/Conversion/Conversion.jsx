import React from 'react';
import Token from './Token';

const Conversion = ({
    selectedCurrencies,
    onUpdateUnits,
    onRemoveSelectedCurrency,
}) => {
    const coinMatchesRequirement = (expectedLength) =>
        selectedCurrencies && selectedCurrencies.length >= expectedLength;

    return (
        <section className='conversion'>
            {/* Token 1 */}
            {coinMatchesRequirement(1) && (
                <Token
                    conversionText='If you have:'
                    currency={selectedCurrencies[0].currency}
                    units={selectedCurrencies[0].units}
                    fallbackText='Please select the first token'
                    onUpdateUnits={onUpdateUnits}
                    index={0}
                    onRemoveSelectedCurrency={onRemoveSelectedCurrency}
                    disableInput={selectedCurrencies.length === 1}
                />
            )}

            {/* Token 2 */}
            {coinMatchesRequirement(2) && (
                <Token
                    conversionText='Then you will have:'
                    currency={selectedCurrencies[1].currency}
                    units={selectedCurrencies[1].units}
                    fallbackText='Please select the first token'
                    disableInput={true}
                    onUpdateUnits={onUpdateUnits}
                    index={1}
                    onRemoveSelectedCurrency={onRemoveSelectedCurrency}
                />
            )}
        </section>
    );
};

export default Conversion;
