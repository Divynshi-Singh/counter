import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [counters, setCounters] = useState([]);
  const handleAddCounterClick = () => {

    setCounters([...counters, { id: Date.now(), value: 0, isStarted: false }]);
  };
  const handleStartStop = (id) => {
    setCounters((prevCounters) =>
      prevCounters.map((counter) =>
        counter.id === id
          ? { ...counter, isStarted: !counter.isStarted }
          : counter
      )
    );
  };

  useEffect(() => {
    const intervals = counters.map((counter) => {
      let interval;
      if (counter.isStarted) {
        interval = setInterval(() => {
          setCounters((prevCounters) =>
            prevCounters.map((c) =>
              c.id === counter.id ? { ...c, value: c.value + 1 } : c
            )
          );
        }, 1000);
      }

      return { id: counter.id, interval };
    });
    return () => {
      intervals.forEach(({ interval }) => clearInterval(interval));
    };
  }, [counters]);

  return (
    <div>
      {/* Add Counter button */}
      <button className="add-counter btn" onClick={handleAddCounterClick}>
        Add Counter
      </button>
      {/* <button className='counter-value btn'>0</button> */}

      <div className="counters-row">
        {counters.map((counter) => (
          <div key={counter.id} className="center-container">

            <button
              className="start-stop"
              onClick={() => handleStartStop(counter.id)}
            >
              {counter.isStarted ? 'Stop Counter' : 'Start Counter'}
            </button>
            <div className="counter-box">
              <p>{counter.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;
