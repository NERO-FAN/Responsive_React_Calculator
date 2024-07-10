import { useState } from "react";
import Header from "./components/Header";
import OutputBox from "./components/OutputBox";
import Keypad from "./components/Keypad";
import './App.css'

const { backGroundColors } = require("./constants/index");

function App() {
    
    const [sharedTheme, setSharedTheme] = useState(1);
    const [currentValue, setCurrentValue] = useState('0');
    
    const handleThemeChanged = (theme) => {
        // Update the sharedData state with the data from child component
        setSharedTheme(theme);
    };
    
    const calculate = (output) => {
        setCurrentValue(output);
    };
    
    return (
        <div className="App" style={{ backgroundColor: `${backGroundColors[`mainColor${sharedTheme}`]}`}}>
            <div className="page-container">
                <Header onButtonClick={handleThemeChanged} />
                <OutputBox theme={sharedTheme} showOutput={currentValue}/>
                <Keypad theme={sharedTheme} currentOutput={calculate}/>
            </div>
            
        </div>
    );
}

export default App;

