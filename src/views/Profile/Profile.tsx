import React from "react";
import "./Profile.css";
import Tab from "../../components/Tab/Tab";
import AboutMe from "../../components/AboutMe/AboutMe";
import Music from "../../components/Music/Music";
import Video from "../../components/Video/Video";
import "../../index.css";

const email = "Jackshauptmgmt@gmail.com";
const Profile = () => {
    return (
        <>
            <div className="card-mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <h5 className="card-title">Jacks Haupt</h5>
                        <img
                            className="img-fluid-rounded-start"
                            src={"../images/Jacks_Pixel.png"}
                            alt="Jacks"
                        />
                    </div>
                    <div>
                        <div className="View">View My: </div>
                        <a
                            href="https://twitter.com/jackshaupt_?lang=en"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button>
                                <img
                                    className="Twitter"
                                    src={"../images/Twitter.png"}
                                    alt="Twitter Logo"
                                />
                            </button>
                        </a>
                        <a
                            href="https://www.tiktok.com/@jacks42069"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button>
                                <img
                                    className="TikTok"
                                    src={"../images/TikTok.png"}
                                    alt="TikTok Logo"
                                />
                            </button>
                        </a>
                        <a
                            href="https://www.instagram.com/jackshaupt/?hl=en"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button>
                                <img
                                    className="Instagram"
                                    src={"../images/Instagram.png"}
                                    alt="Instagram Logo"
                                />
                            </button>
                        </a>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body1">
                            <p className="card-text1">
                                {" "}
                                23 years old<br></br> Dallas,Tx<br></br> United
                                States
                            </p>
                        </div>
                    </div>
                    <a className="email" href={`mailto:${email}`}>
                        <img
                            src="http://i370.photobucket.com/albums/oo146/free-myspacelayouts/buttons/16p.gif"
                            alt="Message Me"
                            border={0}
                        />
                        <span />
                    </a>
                    <br />
                    <span>
                        <a
                            style={{ color: "#FF8C00", fontSize: 20 }}
                            href="http://www.fillster.com/myspace-contact-buttons.html"
                            target="_blank"
                        />
                    </span>
                </div>
            </div>
            <Video />
            <Music />
            <AboutMe />
        </>
    );
};

export default Profile;
