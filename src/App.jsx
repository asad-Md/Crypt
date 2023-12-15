import { useState } from 'react'
import Background from './components/Background.jsx';
import Header from './components/Header'
import Input from './components/Input'
import Output from './components/Output'
import {eKey, dKey} from './util.js';
import headerImgE from './assets/encrLock6.png'
import headerImgD from './assets/decrLock6.png'

function App() {
  const [eInfo, seteInfo] = useState({'PlainText':'','CipherText':'',key:undefined})
  console.log(eInfo);
  function encode(text) {
    seteInfo(prevInfo=> {
      prevInfo=eKey(text)
      return prevInfo
      // prevText = text;
      // console.log(prevText);
      // return prevText 
    })  
    // console.log(eInfo);     
  }
  function decode(text,key) {
    seteInfo(prevInfo=> {
      prevInfo=dKey(text,key)
      return prevInfo
    })
  }


  return (
    <>
    <Background />

    <Header title="Encrypt" headerImg={headerImgE}/>
    <div id="boxes">

      <Input h2={"PlainText"} handleClick={encode} />
      
      <Output h2={"CipherText"} info={eInfo}/>
    </div>

    <Header title="Decrypt" headerImg={headerImgD} />
    <div id="boxes">
      <Input h2={"CipherText"}  handleClick={decode} />
      
      <Output h2={"PlainText"} info={eInfo}/>
    </div>

    </>
  )
}

export default App
