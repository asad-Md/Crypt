import { useState } from "react"

export default function Input({handleClick, h2 }){
    const [text,setText] = useState("")
    var buttonValue; var keyField; var key;
    function handleChange(event){
        setText(prevText =>{
            prevText=event.target.value
            return prevText
        })
    }
    if(h2==='PlainText'){buttonValue="Encode"}else if(h2==='CipherText'){buttonValue="Decode"}
    
    if(h2==="CipherText"){
        function handleKey(event){
            // key= ()=>{prevKey => prevKey= event.target.value; return prevKey}
            key=event.target.value;
        }
        keyField=<input type="number" id="keyInput"
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
            {keyField}
            <button id="encode" className="workButton" 
                    onClick={()=>handleClick(text,key)} > {buttonValue} 
            </button>
            
            
        </div>
    )
}