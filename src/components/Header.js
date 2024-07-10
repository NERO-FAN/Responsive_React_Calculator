import './Header.scss'
import React, { useState, useEffect } from 'react';
import {backGroundColors} from "../constants/index";

const Header = ({ onButtonClick }) => {
    
    const [count, setCount] = useState(1);
    
    const handleClick = () => {
        count !== 3 ? setCount(count + 1) : setCount(1);
        const buttonElement = document.querySelector('.button');
        const buttonContainer = document.querySelector('.button-container');
        
        console.log(count);
        
        count === 1 && !buttonContainer.classList.contains('button-container-2') ?
            buttonContainer.classList.add('button-container-2') : buttonContainer.classList.remove('button-container-2');
        
        count === 2 && !buttonElement.classList.contains('button-container-3') ?
            buttonElement.classList.add('button-container-3') : buttonElement.classList.remove('button-container-3');
    }
    
    useEffect(() => {
        onButtonClick(count); // This will log the updated count value
    }, [count]);
    
    return (
        <div className="header" style={{color: `${backGroundColors[`textColor${count}`]}`}}>
            <p className="app-name" >
                    <a>calc</a>
            </p>
            <div className="theme-options">
                <div className="theme-levels">
                    <div>
                    
                    </div>
                    <div className="level-values">
                        <a style={{marginRight: "18px"}}>1</a>
                        <a>2</a>
                        <a style={{marginLeft: "18px"}}>3</a>
                    </div>
                </div>
                <div className="theme-changer">
                    <a className="theme-text">THEME</a>
                    <div className="button-area">
                        <div className="button-container"
                            style={{ backgroundColor: `${backGroundColors[`keyPadColor${count}`]}` }}>
                            <button className="button"
                                style={{backgroundColor: `${backGroundColors[`buttonColor${count}`]}` }}
                                onClick={() => handleClick()}>
                                
                            </button>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
    );
}

export default Header;