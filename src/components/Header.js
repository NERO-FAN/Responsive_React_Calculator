import './Header.scss'
import React, { useState, useEffect } from 'react';
import {backGroundColors} from "../constants/index";

const Header = ({ onButtonClick }) => {
    
    const [count, setCount] = useState(1);
    
    const handleClick = () => {
        count !== 3 ? setCount(count + 1) : setCount(1);
        const buttonContainer = document.querySelector('.button-container');
        
        console.log(count);
        
        if (count === 1)
            buttonContainer.classList.add('button-container-2');
        else
            buttonContainer.classList.remove('button-container-2');
        
        if (count === 2)
            buttonContainer.classList.add('button-container-3');
        else
            buttonContainer.classList.remove('button-container-3');
    }
    
    useEffect(() => {
        onButtonClick(count); // This will log the updated count value
    }, [count, onButtonClick]);
    
    return (
        <div className="header" style={{color: `${backGroundColors[`textColor${count}`]}`}}>
            <div className="app-name" >
                    <span>calc</span>
            </div>
            <span className="theme-text">THEME</span>
            <div className="theme-changer">
                <div className="theme-levels">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                </div>
                <div className="button-area">
                    <div className="button-container"
                        style={{backgroundColor: `${backGroundColors[`keyPadColor${count}`]}`}}>
                        <button className="button"
                            style={{backgroundColor: `${backGroundColors[`buttonColor${count}`]}`}}
                            onClick={() => handleClick()}>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;