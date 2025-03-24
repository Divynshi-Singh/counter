import React from "react";

const CounterModal = ({ counter, handleStartStop }) => {
    return (
        <div>
            <button
                className="start-stop"
                onClick={() => handleStartStop(counter.id)}
            >
                {counter.isStarted ? "Stop Counter" : "Start Counter"}
            </button>
            <div className="counter-box">
                <p>{counter.value}</p>
            </div>
        </div>
    );
};

export default CounterModal;