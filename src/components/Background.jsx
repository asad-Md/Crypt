export default function Background(){
    return(<>
    <video id="background-video" autoplay loop muted>
        <source src="./src/assets/backgroundvideo.mp4" type="video/mp4" />
    </video>
    <img id="backgroundImg" src="../assets/background.jpg" />
    </>)
}