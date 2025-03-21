import React from 'react';

const TotalSumCounter = ({ counters }) => {
    const totalSum = counters.reduce(
        (sum, counter) => (counter.isStarted ? sum + counter.value : sum),
        0
    );

    return (
        <div>
            <button className="counter-value btn">{totalSum}</button>
        </div>
    );
};

export default TotalSumCounter;
