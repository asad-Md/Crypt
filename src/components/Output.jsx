

// const util = window.util;

export default function Output({ info,h2 }) {
    var value;
    if(h2==='CipherText'){value=info.CipherText;
    }else if(h2==='PlainText'){value=info.PlainText;}  

    const copyToClipboard = () => {
        navigator.clipboard.writeText(value)
            .then(() => alert('Text copied to clipboard'))
            .catch(err => console.error('Could not copy text: ', err));
    }

    return (
        <div id="output" className="contentBox">
            <h2>{h2}</h2>
            
            <textarea id="outputText" className="ioText" value={value} />
            <br/>
            <button className="workButton" id="copy" onClick={copyToClipboard} >Copy Text</button>
        </div>
    )
}