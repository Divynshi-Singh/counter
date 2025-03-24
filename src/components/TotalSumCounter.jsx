import React from 'react';

const TotalSumCounter = ({ counters }) => {
    const totalSum = counters.reduce(
        (sum, counter) => sum + counter.value, 0
    );
    return (
        <button className="counter-value btn">{totalSum}</button>
    );
};

export default TotalSumCounter;

