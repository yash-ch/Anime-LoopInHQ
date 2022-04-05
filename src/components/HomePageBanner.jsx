import "../css/banner.scss";
import Grid from "@mui/material/Grid";
import * as React from "react";
import Button from "@mui/material/Button";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useEffect, useState} from "react";
import {TopBanner} from "../dataFetch/FilmsData";
import Box from "@mui/material/Box";
import {CircularProgress} from "@mui/material";
import {Link} from "react-router-dom";

toast.configure()

export default function HomePageBanner() {
    const [success, setSuccess] = useState(0);
    const [filmData, setFilmData] = useState([{}]);
    const [filmDescription, setDescription] = useState("");
    const CONTENT_LOADED = 1, ERROR = 3;

    useEffect(() => {
        if ((success !== CONTENT_LOADED && success !== ERROR)) {
            TopBanner().then((data) => {
                    setSuccess(CONTENT_LOADED);
                    setDescription(data["description"]);
                    setFilmData(data);

                    if (window.innerWidth < 900 && filmDescription.length < 260) {
                        setDescription(data["description"].substring(0, 260) + ".....");
                    }
                }
            );
        }
    },)

    if (success === CONTENT_LOADED) {
        return (
            <div>
                <img src={filmData["movie_banner"]} alt="series banner" className="banner-image moving-up"/>
                <img src={filmData["image"]} alt="series banner" className="banner-image-portrait moving-up"/>
                <p className="banner-title">
                    {filmData["title"]}
                </p>
                <p className="banner-des">
                    {filmDescription}
                </p>
                <Grid container className="button-grid">
                    <Grid item xs={4} lg={5.4}/>
                    <Grid item xs={4} lg={1}>
                        <Link to={`/anime/${filmData.id}`}>
                            <Button variant="contained" className="banner-buttons popup"><span
                                style={{fontSize: "180%"}}>🛈</span>&nbsp;&nbsp;<p><span
                                className="button-text">Know More</span>
                            </p></Button>
                        </Link>
                    </Grid>
                </Grid>
                <div className="gradient"/>
                <div className="box"/>
            </div>
        );
    } else {
        return (
            <div style={{backgroundColor: "#000000", height: "80vh"}}>
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
    ;
}
