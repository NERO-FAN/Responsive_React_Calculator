import './RenderKeyRows.scss'

const RenderKeyRows = ({keyArray, start, end, theme, value}) => {
    
    keyArray = keyArray.slice(start, end+1);
    
    const sendValue = (index, item) => {
        value(item.keyType);
    }
    
    return (
        <div className="key-row-container">
            {keyArray.map((item, index) => (
                <div key={index} className={`key-column-${item.keyName}`}>
                    <button
                        key={item.keyType}
                        className={`keypad-button-${item.keyName}`}
                        style={{
                            backgroundColor: `${item[`color${theme}`]}`,
                            color: `${item[`fontColor${theme}`]}`,
                            boxShadow: `0 3.5px ${item[`keyShadow${theme}`]}`,
                            fontFamily: 'League Spartan'
                        }}
                        onClick={() => sendValue(index, item)}>
                        {item.keyType}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default RenderKeyRows