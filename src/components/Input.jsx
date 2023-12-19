import { useState } from "react"
import btnImgE from '../assets/encrLock6sbw.png'
import btnImgD from '../assets/decrLock6sbw.png'

export default function Input({handleClick, h2 , info , handleKey}){
    const [text,setText] = useState("")
    
    var buttonValue; var keyField; var btnImg; 

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
    

        keyField=<input type="number" id="keyInput" className="workButton"
                                 placeholder="Enter key" value={info.keyDecr}
                                 required 
                                 onChange={(event)=>{handleKey(event)}} />
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
                <button id="encode" 
                className="workButton" 
                onClick={()=>handleClick(text)} >

                    {buttonValue}
                        <img className="workBtnImg" src={btnImg} alt="Lock Image" />
                </button>
                
            </div>
            
            
            
        </div>
    )
}