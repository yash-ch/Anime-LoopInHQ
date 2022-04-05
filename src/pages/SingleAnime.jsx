import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {SingleAnimeData} from "../dataFetch/FilmsData"
import Header from "../components/Header";
import Box from "@mui/material/Box";
import {Card, CardContent, CardMedia, CircularProgress, Grid} from "@mui/material";
import AnimiaFooter from "../components/Footer";
import "../css/SingleAnime.scss"
import documentTile from "../documentTile";
import * as React from "react";

const animeInformationTitleList = [
    {name: "Original Movie Title", id: "original_title"},
    {name: "Original Movie Title Romanised", id: "original_title_romanised"},
    {name: "Description", id: "description"},
    {name: "Director", id: "director"},
    {name: "Producer", id: "producer"},
    {name: "Release Date", id: "release_date"},
    {name: "Running Time", id: "running_time"},
    {name: "RT Score", id: "rt_score"}
];

export default function SingleAnime(props) {
    let {animeid} = useParams();
    const [success, setSuccess] = useState(0);
    const [animeData, setAnimeData] = useState([{}]);
    const CONTENT_LOADED = 1, ERROR = 3;

    let navigate = useNavigate();
    documentTile("Anime")

    useEffect(() => {
        if ((success !== CONTENT_LOADED && success !== ERROR)) {
            SingleAnimeData(animeid).then((data) => {
                setAnimeData(data);
                setSuccess(CONTENT_LOADED);
            })
        }
    },)

    if (success === CONTENT_LOADED) {
        return (
            <div className="single-anime">
                <Header/>
                <Box sx={{margin: "1% 5%"}} className={"anime-content"}>
                    <div className="animia-single-nft-breadcrumb" style={{display: "flex", marginBottom: "30px"}}>
                        <a style={{textDecoration: "none"}} onClick={() => {
                            navigate(-1)
                        }}>
                            <p className="animia-light-text">{"Home / "}</p>
                        </a>
                        <p className="animia-light-text"
                           style={{paddingLeft: "5px", opacity: "0.5", cursor: "pointer"}}>{animeData.title}</p>
                    </div>

                    <Grid container spacing={2}>
                        <Grid item md={6} xs={12} sm={12}>
                            <div>
                                <Card sx={{borderRadius: 2}} raised={true}>
                                    <CardMedia
                                        component="img"
                                        alt={animeData.title}
                                        image={animeData["movie_banner"]}
                                    />
                                </Card>
                            </div>

                        </Grid>

                        <Grid item md={6} xs={12} sm={12}>
                            <Card sx={{borderRadius: 2, maxWidth: "100vh"}} raised={true}>
                                <CardContent>
                                    <h2 style={{marginLeft: "1vw"}}>
                                        {animeData.title}
                                    </h2>
                                    {animeInformationTitleList.map((data) => {
                                        return (
                                            <div>
                                                <p className={"content-text content-info-title-text"}>
                                                    {data.name}
                                                </p>
                                                <p className={"content-text content-info-text"}>
                                                    {animeData[data.id]}
                                                </p>
                                            </div>
                                        );
                                    })}
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
                <AnimiaFooter/>
            </div>
        );
    } else {
        return (
            <div style={{backgroundColor: "#000000", height: "100vh"}}>
                <Box sx={{
                    display: 'flex',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    marginTop: '-12px',
                    marginLeft: '-12px',
                }}>
                    <CircularProgress size={50}/>
                </Box>
            </div>
        );
    }
}