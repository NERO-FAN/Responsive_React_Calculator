
import {useEffect, useState} from "react";
import RenderKeyRows from "./RenderKeyRows";
import './Keypad.scss'
import {backGroundColors} from "../constants";
const { keyArray } = require("../constants/index");

const Keypad = ({ theme, currentOutput }) => {
    
    const [currentValue, setCurrentValue] = useState('0');
    const [firstNumber, setFirstNumber] = useState('');
    const [secondNumber, setSecondNumber] = useState('');
    const [currentOperator, setCurrentOperator] = useState('');
    
    const giveMeValue = (output) => {
        handleClicked(output);
    }
    
    const handleClicked = (input) => {
        
        let curr = '';
        const isNumber = (/^\d$/.test(input) || input === '.') && currentOperator === '';
        const isOperator = input === 'x' || input === '+' || input === '-' || input === '/';
        
        const resetValues = (first='', second='', third='') => {
            setFirstNumber(first);
            setSecondNumber(second);
            setCurrentOperator(third);
        }
        
        if (isNumber) {
            if (firstNumber === '' && input === '.'){
                curr = '0' + input;
                setFirstNumber(curr);
            }
            else if (firstNumber === '' && input !== '0') {
                curr = input;
                setFirstNumber(curr);
            }
            else if (firstNumber !== '') {
                curr = firstNumber + input;
                setFirstNumber(curr);
            }
            else
                curr = '0'
        }
        else if ((/^\d$/.test(input) || input === '.') && currentOperator !== '') {
            if (firstNumber === '' && input === '.'){
                curr = '0' + input;
                setSecondNumber(curr);
            }
            else if (secondNumber === '' && input !== '0') {
                curr = input;
                setSecondNumber(curr);
            }
            else if (secondNumber === '') {
                curr = secondNumber + input;
                setSecondNumber(curr);
            }
            else
                curr = '0'
        }
        else if (isOperator) {
            setCurrentOperator(input);
            curr = firstNumber !== '' ? firstNumber : '0';
        }
        else if (input === '=') {
            switch (currentOperator) {
                case '+':
                    curr = '' + (parseFloat(firstNumber) + parseFloat(secondNumber));
                    break;
                case '-':
                    curr = '' + (parseFloat(firstNumber) - parseFloat(secondNumber));
                    break;
                case 'x':
                    curr = '' + (parseFloat(firstNumber) * parseFloat(secondNumber));
                    break;
                case '/':
                    curr = '' + (parseFloat(firstNumber) / parseFloat(secondNumber));
                    break;
                default:
                    curr = '0';
                    break;
            }
            resetValues(curr, '', '!');
        }
        else if (input === 'DEL') {
            if (currentValue === '0') {
                curr = '0';
            }
            else if (currentOperator === '!'){
                curr = '0'
                resetValues();            }
            else if (currentValue !== '0' && secondNumber === ''){
                curr = currentValue.slice(0, -1);
                setFirstNumber(curr);
            }
            else if (currentValue !== '0' && currentOperator !== ''){
                curr = currentValue.slice(0, -1);
                setSecondNumber(curr);
            }
        }
        else if (input === 'RESET') {
            resetValues();
            curr = '0';
        }
        setCurrentValue(curr);
    }
    
    useEffect(() => {
        currentOutput(currentValue);
    },[currentValue]);
    
    
    return (
        <div className="keypad-container"
            style={{ backgroundColor: `${backGroundColors[`keyPadColor${theme}`]}`}}
        >
            <RenderKeyRows keyArray={keyArray} start={0} end={3} theme={theme} value={giveMeValue}/>
            <RenderKeyRows keyArray={keyArray} start={4} end={7} theme={theme} value={giveMeValue}/>
            <RenderKeyRows keyArray={keyArray} start={8} end={11} theme={theme} value={giveMeValue}/>
            <RenderKeyRows keyArray={keyArray} start={12} end={15} theme={theme} value={giveMeValue}/>
            <RenderKeyRows keyArray={keyArray} start={16} end={17} theme={theme} value={giveMeValue}/>
        </div>
    );
}

export default Keypad