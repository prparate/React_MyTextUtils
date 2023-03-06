import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        //console.log("button clicked")
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert('Text converted to Uppercase', 'success')
    }

    const handleLoClick = () => {
        //console.log("button clicked")
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert('Text converted to Lowercase', 'success')
    }

    const handleResetClick = () => {
        //console.log("button clicked")
        let newText = ""
        setText(newText)
        props.showAlert('Text Reset successful', 'success')
    }

    const handleOnChange = (event) => {
        //console.log("Text changed")
        setText(event.target.value)
    }

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text)
        props.showAlert('Text copied', 'success')
    }

    const handleExtraSpacesClick = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(' '))
        props.showAlert('Extra spaces removed', 'success')
    }

    const [text, setText] = useState("");
    //text = "enter"//Wrong way to change the state
    //setText("enter")//correct way to change the state
    return (
        <>
        <div className='container' style={props.mode==='light'?{color:'black', backgroundColor:'white'}:{color:'white', backgroundColor:'grey'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} 
                style={props.mode==='light'?{color:'black', backgroundColor:'white'}:{color:'white', backgroundColor:'grey'}}
                id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-3 my-1" disabled={text.length===0} onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-3 my-1" disabled={text.length===0} onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-3 my-1" disabled={text.length===0} onClick={handleResetClick}>Reset Text</button>
            <button className="btn btn-primary mx-3 my-1" disabled={text.length===0} onClick={handleCopyClick}>Copy Text</button>
            <button className="btn btn-primary mx-3 my-1" disabled={text.length===0} onClick={handleExtraSpacesClick}>Remove Extra Spaces</button>
        </div>
        <div className='container my-3' 
        style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='light'?'black':'white'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(' ').filter((element) => {return element.length !== 0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(' ').filter((element) => {return element.length !== 0}).length} minutes read</p>
            <h2>Preview</h2>
            <p>{text.length >0 ? text : 'Nothing to preview'}</p>
        </div>        
        </>
    )
}
