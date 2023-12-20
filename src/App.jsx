import { useState } from 'react';
import {useRef} from 'react';
import Background from './components/Background.jsx';
import Navbar from './components/Navbar.jsx';
import Header from './components/Header'
import Input from './components/Input'
import Output from './components/Output'
import {eKey, dKey, e2Key, d2Key } from './util.js';

function App() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const handleScroll = (ref) => {
      ref.current?.scrollIntoView({behavior: 'smooth'});
    };
  const [eInfo, seteInfo] = useState(
    {'PlainText':'','CipherText':'', key:undefined , keyDecr:undefined ,page:1})

  function handleKeyChange(event){
    seteInfo(prevInfo=> {
      const newInfo = {...prevInfo,
        keyDecr:event.target.value}
      return newInfo
    }) 
  }
  
  function handlePage(num){
    
    seteInfo(prevInfo=> {
      const newInfo = {...prevInfo,
        page:num}
      return newInfo
    })
  }
  let pageContent;

  if(eInfo.page === 1) {

    function encode(text) {
      seteInfo(prevInfo=> {
        const newInfo= {...prevInfo,
          ...eKey(text)}
        return newInfo
      })        
    }
    function decode(text) {
      const key = eInfo.keyDecr
      seteInfo(prevInfo=> {
        const newInfo = {...prevInfo,
        ...dKey(text,key)}
        return newInfo
      })
    }
    pageContent=
    <>   
    {/* <div id="pageNameU"><div id="pageNameV"><Header className="pageName" title="Simple Mode" /></div></div> */}
    
    <div ref={ref1} id="encrContainer" className="boxes">

      <Input h2={"PlainText"} handleClick={encode} />
      <Header title="Encrypt" />
      <Output h2={"CipherText"} info={eInfo}/>
    </div>

    {/* <Header title="Decrypt" headerImg={headerImgD} /> */}
    <div ref={ref2} id="decrContainer" className="boxes">
      <Input h2={"CipherText"} info={ eInfo }
       handleClick={decode}
       handleKey={ handleKeyChange } />
      <Header title="Decrypt"  />
      <Output h2={"PlainText"} info={eInfo}/>
    </div>
    </>

  }else if(eInfo.page === 2) {
    function encode(text) {
      seteInfo(prevInfo=> {
        const newInfo= {...prevInfo,
          ...e2Key(text)}
        return newInfo
      })        
    }
    function decode(text) {
      const key = eInfo.keyDecr
      seteInfo(prevInfo=> {
        const newInfo = {...prevInfo,
        ...d2Key(text,key)}
        return newInfo
      })
    }
    pageContent=
    <>
      {/* <div id="pageNameU"><div id="pageNameV"><Header className="pageName" title="Crazy Mode" /></div></div> */}
      <div ref={ref1} id="encrContainer" className="boxes">
        <Input h2={"PlainText"} handleClick={encode} />
        
        <Header title="E̶͍̘͌̈̐͂n̴̢̧̤̻͎̬͎̦̉͆̃͑̆͂͝ć̷̬̗̥͔͓̤͕̤ȑ̶̢͔̼̪̇͋̈́̌̕y̸̛͍̰͇̰̞̏͊̏̂͛̆̚p̵̟͎̜̟̲̏̊͊́̆̈́͆̈̉̇t̸̗̠̫̟͙̽̋̓̃͒͘͜͠"  />
        
        <Output h2={"CipherText"} info={eInfo}/>
      </div>

      <div ref={ref2} id="decrContainer" className="boxes">
        <Input h2={"CipherText"} info={ eInfo }
          handleClick={decode}
          handleKey={ handleKeyChange } />
        
        <Header title="Ḑ̵͍̼͇͙̰̬̐ͅȩ̴̖̭̀̃́c̷̗̤̲̹̖̏̽͛͂́ř̴̨͙̼͓͈͉ỳ̴͇̮̪͒͛͝p̷̳̞̟̻̲̖̝͔͊̑t̵͉̏̏̔̓͛͘͜"  />
        
        <Output h2={"PlainText"} info={eInfo}/>
      </div>
      </>
  }

  return (
    <>
    <Background />
    <Navbar handleScrollClick={handleScroll} handlePageClick={handlePage} ref1={ref1} ref2={ref2} />
    {pageContent}

    </>
  )
}

export default App
