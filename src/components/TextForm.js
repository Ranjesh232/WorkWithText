import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const [text, setText] = useState("")

    const handleUpperCase = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to UpperCase.", "success")
    }
    const handleLowerCase = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to LowerCase.", "success")
    }
    const handleTitleCase = () => {
        let newText = text.toLowerCase().split(" ")
        for (var i = 0; i < newText.length; i++) {
            newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
        }
        newText = newText.join(' ');
        setText(newText)
        props.showAlert("Converted to TitleCase.", "success")
    }
    const handleRevCase = () => {
        let newText = text.split("").reverse().join("")
        setText(newText)
        props.showAlert("All text reversed.", "success")
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/).join(" ")
        setText(newText)
        props.showAlert("ExtraSpace has been removed.", "success")
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied to Clipboard.", "success")
    }
    const handleClearText = () => {
        let newText = ""
        setText(newText)
        props.showAlert("TextArea Cleared.", "success")
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <div className="mb-3">
                    <h2>{props.heading}</h2>
                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} onChange={handleOnChange} value={text} placeholder="Enter your text here..." rows="6"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary m-1 p-1 mx-1" onClick={handleUpperCase} >Convert to UpperCase</button>
                <button disabled={text.length === 0} className="btn btn-primary m-1 p-1 mx-1" onClick={handleLowerCase} >Convert to LowerCase</button>
                <button disabled={text.length === 0} className="btn btn-primary m-1 p-1 mx-1" onClick={handleTitleCase} >Convert to TitleCase</button>
                <button disabled={text.length === 0} className="btn btn-primary m-1 p-1 mx-1" onClick={handleRevCase} >Reverse the Text</button>
                <button disabled={text.length === 0} className="btn btn-primary m-1 p-1 mx-1" onClick={handleCopy} >Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary m-1 p-1 mx-1" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
                <button disabled={text.length === 0} className="btn btn-primary m-1 p-1 mx-1" onClick={handleClearText} >Clear Text</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your Text Summary:</h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters.</p>
                <p>Time required to read the text: {0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length}</p>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Preview of your Text:</h2>
                <p>{text.length > 0 ? text : "Enter Something to Preview!"}</p>
            </div>
        </>
    )
}
TextForm.propTypes = {
    heading: PropTypes.string.isRequired
}