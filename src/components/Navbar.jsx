import hdrImg from '../assets/incc1.png';
import { handleScrolly1Click, handleScrolly2Click } from '../ind';

export default function Navbar({handleScrollClick,handlePageClick,ref1,ref2}){
    

    return(
        <div id="navbar">
            <div id="navbarThings">
            <p className='scrolly'>Home</p>
            <p className='scrolly1 highlight' onClick={() => { handlePageClick(1); handleScrolly1Click(); }}>Simple</p>
            <p className='scrolly2' onClick={() => { handlePageClick(2); handleScrolly2Click(); }}>Crazy</p>
            <img id="navImg" src={hdrImg} alt="to be added" />
            <p className='scrolly' onClick={()=>handleScrollClick(ref1)}>Encrypt</p>
            <p className='scrolly' onClick={()=>handleScrollClick(ref2)}>Decrypt</p>
            <p className='scrolly' >About Us</p>
            </div>
        </div>
    )
}