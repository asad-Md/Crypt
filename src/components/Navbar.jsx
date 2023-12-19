import hdrImg from '../assets/incc1.png'


export default function Navbar({handleClick,ref1,ref2}){
    

    return(
        <div id="navbar">
            <img id="navImg" src={hdrImg} alt="to be added" />
            <div id="navbarThings">
            <p className='scrolly'>Home</p>
            <p className='scrolly' onClick={()=>handleClick(ref1)}>Encrypt</p>
            <p className='scrolly' onClick={()=>handleClick(ref2)}>Decrypt</p>
            <p className='scrolly' >About Us</p>
            </div>
        </div>
    )
}