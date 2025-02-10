import React, { useState } from 'react'

export default function Textform() {
    const changeText = () => {
        console.log("Button clicked!")
        let newTxt = text.toUpperCase();
        setText(newTxt)
    }
    const handleonChange = (event) => {
        console.log("OnChange Occure!")
        setText(event.target.value);

    }
    const [text, setText] = useState("Your String:")
    return (
        <div>
            <div className="mb-3">
                <label htmlFor="firstText" className="form-label">Your Text</label>
                <input type="text" onChange={handleonChange} className="form-control" id="firstText" aria-describedby="emailHelp" />

            </div>
            <div className="mb-3">
                <label htmlFor="secondText" className="form-label">Converted Text</label>
                <input type="text" value={text} onChange={handleonChange} className="form-control" id="secondText" />
            </div>

            <button onClick={changeText} className="btn btn-primary">Submit</button>
        </div>
    )
}
