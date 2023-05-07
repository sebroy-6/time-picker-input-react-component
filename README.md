# **Time picker React Component**

## Overview

This react component was programmed as a variation on the classique HTML input[type='time'] tag. 
It follows some different rules compared to the traditionnal time input that makes it more adapted for inputing an amount of time instead of a specific time of day (so no AM or PM notation).

# Demo

[![Video Title](https://img.youtube.com/vi/iiXM4cUhb6s/0.jpg)](https://www.youtube.com/watch?v=iiXM4cUhb6s "Video Title")


# QuickStart

## Installation

To install the component, run the following command in your terminal:
```
npm install time-picker-input
```

## Importing
Import the component into your React application using the following code:

```jsx
import TimePickerInput from 'time-picker-input';
```

## Usage
To use the component in your React application, simply add following tag wherever you'd like :
```jsx
<TimePickerInput /> 
```

## Properties
Here is an exemple including all the possible properties to include in the component:
```jsx
<TimePickerInput 
    id="foo"
    value="99:59"
    onTimeChange={ (HHMM_String) => { console.log(HHMM_String) } }
/> 
```

### **Note**
When an Id is provided, it is possible to access the 2 individual input elements (one for hours and one for minutes) with the following:
```js
    const myId = "foo";

    const hoursInputElement = document.getElementById(myId + "-hours");
    const minutesInputElement = document.getElementById(myId + "-minutes");
```

# Author
[Sebastien Roy](https://github.com/sebroy-6)
