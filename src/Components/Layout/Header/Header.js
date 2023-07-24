import './Header.css';

const fsRequest = (element) => {
    if(element.requestFullscreen) {
        element.requestFullscreen();
      } else if(element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if(element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if(element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
}

const fsExit = () => {
  if (document.fullscreenElement)
    if (document.exitFullscreen) document.exitFullscreen();
};

const handleRequestClick = () => {
    const elem = document.getElementById('layout');
    console.log(elem);
    if(elem){
        fsRequest(elem);
    }
}

export const Header = () => {
    return (
        <div className='header'>
            <button className='btn' onClick={handleRequestClick}>
                request FullScreen
            </button>
            <button className='btn' onClick={()=>fsExit()} >
                exit FullScreen
            </button>
        </div>
    )
}