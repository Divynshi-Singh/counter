import React, { useState, useEffect, useRef } from 'react';
import TotalSumCounter from './TotalSumCounter';

const Counter = () => {
  const [counters, setCounters] = useState([]);
  const intervalsRef = useRef({});

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
    counters.forEach((counter) => {
      if (counter.isStarted && !intervalsRef.current[counter.id]) {

        intervalsRef.current[counter.id] = setInterval(() => {
          setCounters((prevCounters) =>
            prevCounters.map((c) =>
              c.id === counter.id ? { ...c, value: c.value + 1 } : c
            )
          );
        }, 1000);
      } else if (!counter.isStarted && intervalsRef.current[counter.id]) {

        clearInterval(intervalsRef.current[counter.id]);
        delete intervalsRef.current[counter.id];
      }
    });


    return () => {
      Object.values(intervalsRef.current).forEach(clearInterval);
      intervalsRef.current = {};
    };
  }, [counters]);

  return (
    <div>

      <button className="add-counter btn" onClick={handleAddCounterClick}>
        Add Counter
      </button>
      <TotalSumCounter counters={counters} />
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
