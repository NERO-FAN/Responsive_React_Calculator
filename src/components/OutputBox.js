
import './OutputBox.scss'
import {backGroundColors} from "../constants/index";

const OutputBox = ({ theme, showOutput }) => {
    return (
        <div className="output-container"
            style={{backgroundColor: `${backGroundColors[`outPutColor${theme}`]}`}}
        >
            <span className="output" style={{color: `${backGroundColors[`textColor${theme}`]}`}}>
                {showOutput}
            </span>
        </div>
    );
}

export default OutputBox;