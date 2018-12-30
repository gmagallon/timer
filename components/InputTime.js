import React from 'react';

function filterMinMax({ min, max }) {
    return value => {
        if (value < min) return min;
        if (value > max) return max;
        return value;
    }
}

const timeFilter = filterMinMax({ min: 0, max: 59 });

export default function InputTime({ onMinutesChanged, onSecondsChanged, minutes, seconds, clean }) {
    return (
        <div>
            <input type="number" min="0" max="59" value={minutes} onChange={event => onMinutesChanged(timeFilter(event.target.value))} onBlur={clean} aria-label="input to choose minutes" />
            <span>:</span>
            <input type="number" min="0" max="59" value={seconds} onChange={event => onSecondsChanged(timeFilter(event.target.value))} onBlur={clean} aria-label="input to choose seconds" />
            <style jsx>{`
                    div {
                        display: flex;
                        font-size: xx-large;
                        justify-content: space-between;
                    }
                    input {
                        text-align: center;
                        font-size: xx-large;
                        width: 2em;
                    }
                `}</style>
        </div>
    );
}