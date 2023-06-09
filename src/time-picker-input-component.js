import React, { useState, useEffect, useRef } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import './time-picker-input-component.css';

export default function TimePickerInput({ onTimeChange, value="", id }) {
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');

    const hoursInput = useRef();
    const minutesInput = useRef();

    useEffect(() => {
        if (value) {
            if (typeof value === 'string') {
                const timeRegex = /^(0?[0-9]|[1-9][0-9]):[0-5][0-9]$/
                if (timeRegex.test(value)) {
                    setHours(value.split(':')[0]);
                    setMinutes(value.split(':')[1]);
                }
            }
        }
    }, [value]);

    useEffect(() => {
        const timeRegex = /^([0-9]|[1-9][0-9]):[0-5][0-9]$/
        if (onTimeChange) {
            if (timeRegex.test(`${hours}:${minutes}`)) {
                if (Number(hours)) onTimeChange(`${hours}:${minutes}`);
                else onTimeChange(`0:${minutes}`);
            }
            else if (/^0?[0-9]:[0-5][0-9]$/.test(`${hours}:${minutes}`)) onTimeChange(`${hours[1]}:${minutes}`);
        }
    }, [hours, minutes, onTimeChange]);

    function onChangeHours(input) {
        if (!isNaN(input)) {
            if (Number(input) >= 0 && Number(input) < 100) {
                setHours(input);
            }
        }
    };

    function onChangeMinutes(input) {
        if (!isNaN(input)) {
            if (Number(input) < 60 && Number(input) >= 0) setMinutes(input);
        }
    };

    function handleHoursKeyPress(event) {
        if (event.target.selectionStart === hours.length) {
            if (event.key === "ArrowRight" || event.key === "Delete") {
                event.preventDefault();
                minutesInput.current.focus();
            }
            else if (!isNaN(event.key) && event.target.selectionStart === 2) {
                minutesInput.current.focus();
            }
        }
        if (event.key === "ArrowUp") {
            onChangeHours(hours !== "99" ? String(Number(hours) + 1) : "0");
        }
        if (event.key === "ArrowDown") {
            onChangeHours(hours !== '0' && hours !== "00" ? String(Number(hours) - 1) : "99");
        }
        if (!isNaN(event.key) && event.target.selectionStart === 0) {
            setHours("");
        }
    }

    function handleMinutesKeyPress(event) {
        if ((event.key === "ArrowLeft" || event.key === "Backspace") && event.target.selectionStart === 0) {
            event.preventDefault();
            hoursInput.current.focus();
            hoursInput.current.setSelectionRange(hours.length, hours.length);
        }
        if (event.key === "ArrowUp") {
            onChangeMinutes(Number(minutes) < 55 ? String(Number(minutes) + 5 - Number(minutes) % 5) : "0");
        }
        if (event.key === "ArrowDown") {
            const substraction = Number(minutes) % 5 ? Number(minutes) % 5 : 5;
            onChangeMinutes(minutes !== "0" && minutes !== "00" ? String(Number(minutes) - substraction) : "55");
        }
        if (!isNaN(event.key) && event.target.selectionStart === 0) {
            setMinutes("");
        }
    }


    return (
        <div className="time-input" id={id}>
            <input
                id={id ? id + "-hours" : ""}
                type="text"
                className="hour-input"
                maxLength="2"
                placeholder="HH"
                value={hours}
                onChange={(event) => { onChangeHours(event.target.value) }}
                onKeyDown={handleHoursKeyPress}
                ref={hoursInput}
            />
            <span>:</span>
            <input
                id={id ? id + "-minutes" : ""}
                type="text"
                className="minute-input"
                maxLength="2"
                placeholder="MM"
                value={minutes}
                onChange={(event) => { onChangeMinutes(event.target.value) }}
                onKeyDown={handleMinutesKeyPress}
                ref={minutesInput}
            />
            <AiOutlineClockCircle className="clock" />
        </div>
    );
};