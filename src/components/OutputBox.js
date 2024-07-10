
import './OutputBox.scss'
import {backGroundColors} from "../constants/index";

const OutputBox = ({ theme, showOutput }) => {
    return (
        <div className="output-container"
            style={{backgroundColor: `${backGroundColors[`outPutColor${theme}`]}`}}
        >
            <p className="output" style={{color: `${backGroundColors[`textColor${theme}`]}`}}>
                {showOutput}
            </p>
        </div>
    );
}

export default OutputBox;