import React, { useEffect, useState } from "react";
import TimePickerInput from "./time-picker-input-component";

export default function App() {
    const [value, setValue] = useState();

    useEffect(() => {
        console.log(value);
    }, [value]);

    return (<div>
        <TimePickerInput 
            id="foo"
            value={value}
            onTimeChange={ (HHMM_String) => { setValue(HHMM_String) } }
        /> 
    </div>);
};