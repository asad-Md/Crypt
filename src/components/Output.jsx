export default function Output({ info , h2 }) {
    var value;var keyField;var key;
    
    if(h2==='CipherText'){value=info.CipherText;
    }else if(h2==='PlainText'){value=info.PlainText;}  

    const copyToClipText = () => {

        navigator.clipboard.writeText(value)
            // .then(() => alert('Text copied to clipboard'))
            .catch(err => console.error('Could not copy text: ', err));
        
    }

    const copyToClipKey = () => {

        navigator.clipboard.writeText(key)
            // .then(() => alert('Text copied to clipboard'))
            .catch(err => console.error('Could not copy text: ', err));
        key=(prevKey=>{prevKey="Copied!";return prevKey});
    }

    if(h2==="CipherText"){
        key=info.key;
        keyField=<button placeholder="" className="workButton" id="copy" 
        onClick={copyToClipKey}>Key: {key} </button>
    }

    return (
        <div id="output" className="contentBox">
            <h2>{h2}</h2>
            
            <textarea id="outputText" className="ioText" value={value} />
            <br/>
            <div className="btns" >
                {keyField}
                <button className="workButton" id="copy" onClick={copyToClipText} >Copy Text</button>
            </div>
            
        </div>
    )
}