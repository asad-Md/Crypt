import bgVid from '../assets/backgroundvideo.mp4'
export default function Background(){
    return(<>
    <video id="background-video" autoPlay loop muted>
        <source src={bgVid} type="video/mp4" />
    </video>
    
    </>)
}
