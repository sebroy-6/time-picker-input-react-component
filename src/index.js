import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TimePickerInput from './time-picker-input-component.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TimePickerInput 
        id="foo"
        defaultHours="99"
        defaultMinutes="59"
        onTimeChange={ (HHMM_String) => { console.log(HHMM_String) } }
    /> 
  </React.StrictMode>
);

export default TimePickerInput;