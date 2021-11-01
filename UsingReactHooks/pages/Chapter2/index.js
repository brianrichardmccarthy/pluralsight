import React, {useState} from "react";

const InputElement = () => {
    const [inputText, setInputText] = useState('');
    const [historyText, setHistoryText] = useState([]);
    return <div>
        <input
            onChange={(event) => {
                setInputText(event.target.value);
                setHistoryText([...historyText, event.target.value]);
            }}
            placeholder="Enter some text" />
        <br/>
        {inputText}
        <br/>
        <hr />
        <ul>
            {historyText.map((ht) => {
                return <li>{ht}</li>
            })}
        </ul>
    </div>
};

export default InputElement;