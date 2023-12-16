import hdrImg from '../assets/incc1.png'


export default function Navbar({handleClick,ref1,ref2}){
    

    return(
        <div id="navbar">
            <img id="hdrImg" src={hdrImg} alt="to be added" />
            <div id="navbarThings">
                <h1>someName idk ;p</h1>

                <button className='scrolly' onClick={()=>handleClick(ref1)}>Encrypt</button>
                <button className='scrolly' onClick={()=>handleClick(ref2)}>Decrypt</button>
                <button className='scrolly' >links to main website</button>
                <button className='scrolly' >or homepage, etc blahblah</button>
            </div>
        </div>
    )
}