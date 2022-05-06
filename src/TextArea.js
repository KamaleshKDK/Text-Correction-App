import React, { useState } from 'react';
import "./TextArea.css";

function TextArea() {
    const [input, setInput] = useState("");
    const corrections = {
        helo: "Hello",
        br: "Brother",
        it: "its",
        realy: "Really",
        wierd: "Weird",


    };

    function checkForWordMatch(e) {
        let textwords = e.split(" ");
        let lastTextWord = textwords[textwords.length - 1];
        let currentTextLength = e.length;
        let wordToCorrect = corrections[lastTextWord];
        if (corrections[lastTextWord] !== undefined) {
            e = e.slice(0, currentTextLength - lastTextWord.length) + wordToCorrect;
        }
        setInput(e);

    }

    return (
        <div>
            <h1 className='heading'>Auto-Correction App</h1>
           <h2> Type this Sentence in Input Field</h2>
                <p className='emoji'>&#128071;</p>
                <h3 className='type-style'>--- helo br it realy wierd ---</h3>
            <br></br>
            <input
                className="textInput"
                type="text"
                onChange={(event) => checkForWordMatch(event.target.value)}
                value={input}>
            </input>
        </div>
    );
}

export default TextArea