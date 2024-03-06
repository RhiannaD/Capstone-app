import React, { useState, useRef} from "react";
import "./Video.css";






function Video() {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    function handlePlay() {
        videoRef.current?.play();
        setIsPlaying(true);
    }

    function handlePause() {
        videoRef.current?.pause();
        setIsPlaying(false);
    }

    function handleVideoChange() {
        setIsPlaying(!videoRef.current?.paused);
    }

    return (
        <>
            <div className="card">
                <img
                    className="Tv"
                    src={"/images/Jacks_Tv_img.jpg"}
                    alt="Tv"
                />
                <div className="video-overlay">
                    <video
                        className="video"
                        ref={videoRef}
                        src={"/images/Video.MOV"}
                        controls
                        onPlay={handleVideoChange}
                        onPause={handleVideoChange}
                    />
                </div>
                {isPlaying ? (
                    <button onClick={handlePause}>Pause</button>
                ) : (
                    <button onClick={handlePlay}>Play</button>
                )}
                <div className="card-body">
                    <p className="card-text-video">3 Am by Jacks Haupt</p>
                    <p className="listen"> Want to hear more music?</p>
                    <div className="musicLinks">
                        <a
                            href="https://soundcloud.com/jacqueline-haupt?ref=clipboard&p=i&c=1"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button>
                                <img
                                    className="SoundCloud"
                                    src={"/images/SoundCloud.png"}
                                    alt="SoundCloud Logo"
                                />
                            </button>
                        </a>
                        <a
                            href="https://open.spotify.com/artist/2ViEMjNl3uwwGlyIqKt1Mm"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button>
                                <img
                                    className="Spotify"
                                    src={"/images/Spotify.png"}
                                    alt="Spotify Logo"
                                />
                            </button>
                        </a>
                        <a
                            href="https://www.youtube.com/channel/UC701SiOrrXfYyL2Z7KBUcig"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button>
                                <img
                                    className="YouTube"
                                    src={"/images/YouTube.png"}
                                    alt="Youtube Logo"
                                />
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Video;
// interface Size {
//   children: React.ReactNode;
// }

// const Container= ({children }: Size) => {
//   const [isMobile, setIsMobile] = useState<boolean> (false);
// }
//   useEffect(()=> {
//     const handleResize =() => {
//       setIsMobile(window.innerWidth <768);
//     };
//     window.addEventListener('resize', handleResize);
//     handleResize();

//     return () => window.removeEventListener('resize', handleResize);

//   }, []);

//   return (
//     <div className={{'./Video.css'} `${isMobile ? }}
//   )

// function Video() {
//     const [isPlaying, setIsPlaying] = useState(false);
//     const videoRef = useRef<HTMLVideoElement>(null);

//     function handlePlay() {
//         videoRef.current?.play();
//         setIsPlaying(true);
//     }
//     function handlePause() {
//         videoRef.current?.pause();
//         setIsPlaying(false);
//     }
//     function handleVideoChange() {
//         setIsPlaying(!videoRef.current?.paused);
//         Video();
//     }

//     return (
//         <>
//             <div className="card">
//                 <img
//                     className="Tv"
//                     src={"../images/Jacks_Tv_img.jpg"}
//                     alt="Tv"
//                 />
//                 <div className="video-overlay">
//                     <video
//                         className="video"
//                         ref={videoRef}
//                         src={"../images/Video.MOV"}
//                         controls
//                         onPlay={handleVideoChange}
//                         onPause={handleVideoChange}
//                     />
//                 </div>
//                 {/* {isPlaying ?( 
//             <button onClick={handlePause}>Pause</button>) : (
//             <button onClick={handlePlay}>Play</button>
//             )} */}
//                 <div className="card-body">
//                     <p className="card-text-video">3 Am by Jacks Haupt</p>
//                     <p className="listen"> Want to hear more music?</p>
//                     <div className="musicLinks">
//                         <a
//                             href="https://soundcloud.com/jacqueline-haupt?ref=clipboard&p=i&c=1"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                         >
//                             <button>
//                                 <img
//                                     className="SoundCloud"
//                                     src={"../images/SoundCloud.png"}
//                                     alt="SoundCloud Logo"
//                                 />
//                             </button>
//                         </a>
//                         <a
//                             href="https://open.spotify.com/artist/2ViEMjNl3uwwGlyIqKt1Mm"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                         >
//                             <button>
//                                 <img
//                                     className="Spotify"
//                                     src={"../images/Spotify.png"}
//                                     alt="Spotify Logo"
//                                 />
//                             </button>
//                         </a>
//                         <a
//                             href="https://www.youtube.com/channel/UC701SiOrrXfYyL2Z7KBUcig"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                         >
//                             <button>
//                                 <img
//                                     className="YouTube"
//                                     src={"../images/YouTube.png"}
//                                     alt="Youtube Logo"
//                                 />
//                             </button>
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Video;
