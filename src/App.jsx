import { useState } from 'react';
import {useRef} from 'react';
import Background from './components/Background.jsx';
import Navbar from './components/Navbar.jsx';
import Header from './components/Header'
import Input from './components/Input'
import Output from './components/Output'
import {eKey, dKey} from './util.js';
import headerImgE from './assets/encrLock6.png'
import headerImgD from './assets/decrLock6.png'

function App() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const handleScroll = (ref) => {
      ref.current?.scrollIntoView({behavior: 'smooth'});
    };

  const [eInfo, seteInfo] = useState({'PlainText':'','CipherText':'', key:undefined , keyDecr:undefined })
  // console.log(eInfo);
  function encode(text) {
    seteInfo(prevInfo=> {
      const newInfo= {...prevInfo,
        ...eKey(text)}
      // prevInfo=eKey(text)
      return newInfo
      // prevText = text;
      // console.log(prevText);
      // return prevText 
    })  
         
  }
  function handleKeyChange(event){
    seteInfo(prevInfo=> {
      const newInfo = {...prevInfo,
        keyDecr:event.target.value}
      return newInfo
    }) 
    // info.keyDecr= parseInt(event.target.value)
    // console.log(typeof(info.keyDecr));
 }
  function decode(text) {
    const key = eInfo.keyDecr
    seteInfo(prevInfo=> {
      const newInfo = {...prevInfo,
      ...dKey(text,key)}
      return newInfo
    })
  }


  return (
    <>
    <Background />
    <Navbar handleClick={handleScroll} ref1={ref1} ref2={ref2} />
    
    {/* <Header title="Encrypt" headerImg={headerImgE}/> */}
    <div ref={ref1} id="encrContainer" className="boxes">

      <Input h2={"PlainText"} handleClick={encode} />
      <Header title="Encrypt" headerImg={headerImgE}/>
      <Output h2={"CipherText"} info={eInfo}/>
    </div>

    {/* <Header title="Decrypt" headerImg={headerImgD} /> */}
    <div ref={ref2} id="decrContainer" className="boxes">
      <Input h2={"CipherText"} info={ eInfo }
       handleClick={decode}
       handleKey={ handleKeyChange } />
      <Header title="Decrypt" headerImg={headerImgD} />
      <Output h2={"PlainText"} info={eInfo}/>
    </div>

    </>
  )
}

export default App
