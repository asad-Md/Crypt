import hdrImg from '../assets/incc1.png'


export default function Navbar({handleScrollClick,handlePageClick,ref1,ref2}){
    

    return(
        <div id="navbar">
            <img id="navImg" src={hdrImg} alt="to be added" />
            <div id="navbarThings">
            <p className='scrolly'>Home</p>
            <p className='scrolly' onClick={()=>handlePageClick(1)} >Simple</p>
            <p className='scrolly' onClick={()=>handlePageClick(2)} >Crazy</p>
            <p className='scrolly' onClick={()=>handleScrollClick(ref1)}>Encrypt</p>
            <p className='scrolly' onClick={()=>handleScrollClick(ref2)}>Decrypt</p>
            <p className='scrolly' >About Us</p>
            </div>
        </div>
    )
}