import React from 'react';

const TotalSumCounter = ({ counters }) => {
    const totalSum = counters.reduce(
        (sum, counter) => sum + counter.value, 0
    );

    return (
        <div>
            <button className="counter-value btn">{totalSum}</button>
        </div>
    );
};

export default TotalSumCounter;
