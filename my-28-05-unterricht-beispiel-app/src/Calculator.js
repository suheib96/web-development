import React, { useState } from 'react';

const Calculator = () => {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [result, setResult] = useState(null);
    const [operator, setOperator] = useState('+');

    const handleInput = (value, setInput) => {
        const num = parseFloat(value);
        if (!isNaN(num) || value === '') {
            setInput(value);
        }
    };

    const calculateResult = () => {
        const num1 = parseFloat(input1);
        const num2 = parseFloat(input2);
        let res = 0;
        switch (operator) {
            case 'plus':
                res = num1 + num2;
                break;
            case 'mal':
                res = num1 * num2;
                break;
            case 'geteilt':
                res = num1 / num2;
                break;
            case 'minus':
                res = num1 - num2;
                break;
            default:
                res = 0;
        }
        setResult(res);
    };

    return (
        <div>
            <input
                value={input1}
                onChange={(e) => handleInput(e.target.value, setInput1)}
            />
            <select value={operator} onChange={(e) => setOperator(e.target.value)}>
                <option value="plus">Add (+)</option>
                <option value="mal">Mult (×)</option>
                <option value="geteilt">Divide (÷)</option>
                <option value="minus">Minus (-)</option>
            </select>
            <input
                value={input2}
                onChange={(e) => handleInput(e.target.value, setInput2)}
            />
            <button onClick={calculateResult}>Calculate</button>
            <div>Result: {result}</div>
        </div>
    );
};

export default Calculator;
