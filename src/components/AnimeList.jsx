import "../css/AnimeList.scss"
import { Card, CardMedia, CircularProgress, Grid } from "@mui/material"
import { useEffect, useState } from "react";
import { GetRawData } from "../dataFetch/FilmsData";
import * as React from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

export default function AnimeList() {
    const [success, setSuccess] = useState(0);
    const [animeData, setAnimeData] = useState([{}]);

    const CONTENT_LOADED = 1, ERROR = 3;

    useEffect(() => {
        console.log("useEffect for Anime List")
        if ((success !== CONTENT_LOADED && success !== ERROR)) {
            GetRawData().then((data) => {
                // console.log(data);
                setAnimeData(data);
                setSuccess(CONTENT_LOADED)
            }
            )
        }
    }, [])

    if (success === CONTENT_LOADED) {
        return (
            <div id="parent" style={{ zIndex: '3' }}>
                <p className="recommendations">
                    Anime Recommendations
                </p>
                <Grid container justifyContent="center">
                    {animeData.map((movie, index) => {
                        return (
                            <Grid item xs={4} md={2} className="poster-row" key={movie.id}>
                                <Link to={`/anime/${movie.id}`}>
                                    <Card style={{
                                        borderRadius: "2vh",
                                        marginLeft: "2.6vw",
                                        backgroundColor: "transparent"
                                    }}
                                        className="popup portrait-poster">
                                        <CardMedia
                                            component="img"
                                            image={movie.image}
                                            alt={movie.title}
                                            className="card-image"
                                            key={movie.id}
                                        />
                                    </Card>
                                </Link>
                            </Grid>
                        );
                    })}
                </Grid>
            </div>
        );
    } else {
        return (
            <div style={{ backgroundColor: "#000000", height: "100vh" }}>
                <Box sx={{
                    display: 'flex',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    marginTop: '-12px',
                    marginLeft: '-12px',
                }}>
                    <CircularProgress size={50} />
                </Box>
            </div>
        );
    }
}

