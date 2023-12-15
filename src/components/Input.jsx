import { useState } from "react"
import btnImgE from '../assets/encrLock6s.png'
import btnImgD from '../assets/decrLock6s.png'

export default function Input({handleClick, h2 }){
    const [text,setText] = useState("")

    var buttonValue; var keyField; var key; var btnImg;

    function handleChange(event){
        setText(prevText =>{
            prevText=event.target.value
            return prevText
        })
    }
    if(h2==='PlainText'){
        btnImg=btnImgE
        buttonValue="Encode"}else if(h2==='CipherText'){buttonValue="Decode"}
    
    if(h2==="CipherText"){
        btnImg=btnImgD
        function handleKey(event){
            key=event.target.value;
        }

        keyField=<input type="number" id="keyInput" className="workButton"
                                 placeholder="Enter key" required
                                 onChange={handleKey} />
    }


    return(
        <div id="input" className="contentBox">
            <h2>{h2} </h2>
            
            <textarea type="text" id="inputText" className="ioText" 
                placeholder={"Enter text here"}
                    required value={text} onChange={(event)=>{handleChange(event)}}/>
            
            <br/>
            <div className="btns" >
                {keyField}
                <button id="encode" className="workButton" 
                        onClick={()=>handleClick(text,key)} > {buttonValue}
                        <img className="workBtnImg" src={btnImg} alt="Lock Image" />
                </button>
                
            </div>
            
            
            
        </div>
    )
}