import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import "./Music.css";

const apiUrl = "https://accounts.spotify.com/api/token";
const clientSecret = "5ffcd5ef9c554cdca4476fe626c6b827";
const clientId = "9b8b636f706d4f7baa62185cf7cfa29e";

const Music = () => {
    const getToken = async () => {
        try {
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    Authorization:
                        "Basic " + btoa(clientId + ":" + clientSecret),
                },
                body: "grant_type=client_credentials",
            });

            const data = await response.json();
            return data.access_token;
        } catch (error) {
            console.error("Error fetching access token:", error);
        }
    };

    const MediaControlCard = () => {
        const theme = useTheme();

        const [songData, setSongData] = useState(null);
        const [playing, setPlaying] = useState(false);
        const [imgUrl, setImgUrl] = useState(null);
        const audio = useRef(null);

        const getSong = async (track, artist) => {
            try {
                const token = await getToken();
                const response = await fetch(
                    `https://api.spotify.com/v1/search?q=${track},${artist}&type=track,artist`,
                    {
                        headers: {
                            Authorization: "Bearer " + token,
                        },
                    }
                );
                const data = await response.json();
                console.log(data);

                const song = data.tracks.items[0].preview_url;
                console.log(song);

                const img = data.artists.items[0].images[2].url;
                console.log(img);

                setSongData(song);
                setImgUrl(img);
            } catch (error) {
                console.error("Error fetching playlist data:", error);
            }
        };

        const handlePlay = () => {
            if (audio.current && !playing) {
                audio.current?.play();
                setPlaying(true);
            } else if (audio.current && playing) {
                audio.current.pause();
                setPlaying(false);
            }
        };

        useEffect(() => {
            if (songData) {
                if (audio.current) {
                    audio.current.pause();
                }
                audio.current = new Audio(songData);
                audio.current.addEventListener("ended", () => {
                    setPlaying(false);
                });
            }
        }, [songData]);

        useEffect(() => {
            getSong("Sola", "Jacks Haupt");
        }, []);

        return (
            <div className="musicCard">
                <Card sx={{ display: "flex" }}>
                    <Box
                        sx={{ display: "flex", flexDirection: "column" }}
                        className="cardContent"
                    >
                        <CardContent>
                            <Typography component="div" variant="h5">
                                <h4 className="track">New Single! "SOLA"</h4>
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                color="text.secondary"
                            >
                                <h4 className="artist">Jacks Haupt</h4>
                            </Typography>
                        </CardContent>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                pl: 1,
                                pb: 1,
                            }}
                        >
                            <IconButton aria-label="previous">
                                {theme.direction === "rtl" ? (
                                    <SkipNextIcon />
                                ) : (
                                    <SkipPreviousIcon />
                                )}
                            </IconButton>
                            <IconButton
                                aria-label="play/pause"
                                onClick={handlePlay}
                            >
                                {playing ? (
                                    <PauseIcon sx={{ height: 38, width: 38 }} />
                                ) : (
                                    <PlayArrowIcon
                                        className="play"
                                        sx={{ height: 38, width: 38 }}
                                    />
                                )}
                            </IconButton>
                            <IconButton aria-label="next">
                                {theme.direction === "rtl" ? (
                                    <SkipPreviousIcon />
                                ) : (
                                    <SkipNextIcon />
                                )}
                            </IconButton>
                        </Box>
                    </Box>
                    {imgUrl && (
                        <CardMedia
                            component="img"
                            sx={{ width: 151 }}
                            image={imgUrl}
                            alt="Live from space album cover"
                        />
                    )}
                </Card>
            </div>
        );
    };

    return <MediaControlCard />;
};

ReactDOM.render(<Music />, document.getElementById("root"));

export default Music;
