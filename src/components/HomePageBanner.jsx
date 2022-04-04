import "../css/banner.scss";
import Grid from "@mui/material/Grid";
import * as React from "react";
import Button from "@mui/material/Button";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useEffect, useState} from "react";
import {TopBanner} from "../dataFetch/FilmsData";
import {dialogContent} from "./GeneralComponents";
import Dialog from "@mui/material/Dialog";
import {DialogContent, useMediaQuery, useTheme} from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";

toast.configure()

export default function HomePageBanner() {
    const [success, setSuccess] = useState(0);
    const [filmData, setFilmData] = useState([{}]);
    const [filmDescription, setDescription] = useState("");
    const CONTENT_LOADED = 1, ERROR = 3;
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    useEffect(() => {
        if ((success !== CONTENT_LOADED && success !== ERROR)) {
            animeRandomDataIteration();
        }
    },)

    function animeRandomDataIteration() {//for loading the data
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
                        <Button variant="contained" className="banner-buttons popup" onClick={handleClickOpen}><span
                            style={{fontSize: "180%"}}>🛈</span>&nbsp;&nbsp;<p><span
                            className="button-text">Know More</span>
                        </p></Button>
                    </Grid>
                </Grid>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    scroll={"paper"}
                    fullScreen={fullScreen}
                    aria-labelledby="scroll-dialog-title"
                    aria-describedby="scroll-dialog-description"
                    className="dialog"
                >
                    <DialogTitle id="scroll-dialog-title">{filmData["title"]}</DialogTitle>
                    <DialogContent dividers={true}>
                        {dialogContent(filmData)}
                        <Button onClick={handleClose}>Close</Button>
                    </DialogContent>
                </Dialog>
                <div className="gradient"/>
                <div className="box"/>
            </div>
        );
    } else {
        return (
            <div/>
        );
    }
    ;
}
