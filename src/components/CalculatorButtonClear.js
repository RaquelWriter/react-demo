import React from 'react';
import '../stylesheets/CalculatorButtonClear.css';

const CalculatorButtonClear = (props) => (
    <div className = 'calculator-button-clear'
    onClick={() => props.handleClick(props.children)}
    >
        {props.children}
    </div>
)

export default CalculatorButtonClear;