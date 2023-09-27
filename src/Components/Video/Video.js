import vid from '../Video/provideo.mp4'
import "../Video/video.css"
// import { IconName } from "react-icons/bs";
// import { GrLocation } from 'react-icons/gr';
// import {HiFilter} from 'react-icons/hi'


function Video1() {
    return (<>
        <section className='home'>
            <div className="overlay"></div>
            <video src={vid} muted autoPlay loop type="video/mp4"></video>
            <div className='homeContent container'>
                {/* <div className='textDiv'>
                    <span className='smallText'>
                        <h2 >Discover stories, thinking, <br></br>and expertise from writers on any topic.</h2>
                    </span>
                    <h1 className='homeTitle'>
                        Search your holiday
                    </h1></div> */}
                {/* <div className='cardDiv grid'>
                   
                        <Available/>

                    </div> */}
                     
                </div>


        </section>
    </>)

}
export default Video1