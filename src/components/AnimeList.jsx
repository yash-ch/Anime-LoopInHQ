import "../css/AnimeList.scss"
import {Card, CardMedia, CircularProgress, DialogContent, Grid, useMediaQuery, useTheme} from "@mui/material"
import {useEffect, useState} from "react";
import {GetRawData} from "../dataFetch/AllFilmsData";
import * as React from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import Box from "@mui/material/Box";
import {dialogContent} from "./GeneralComponents";
import DialogTitle from "@mui/material/DialogTitle";

export default function AnimeList() {
    const [success, setSuccess] = useState(0);
    const [animeData, setAnimeData] = useState([{}]);
    const CONTENT_LOADED = 1, ERROR = 3;
    const [movieIndex, setMovieIndex] = useState(0);

    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = (index) => () => {
        setMovieIndex(index);
        console.log(movieIndex);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        if ((success !== CONTENT_LOADED && success !== ERROR)) {
            animeDataIteration();
        }
    })

    function animeDataIteration() {//for loading the data
        GetRawData().then((data) => {
                // console.log(data);
                setAnimeData(data);
                setSuccess(CONTENT_LOADED)
            }
        )
    }

    if (success === CONTENT_LOADED) {
        return (
            <div id="parent" style={{zIndex: '3'}}>
                <p className="recommendations">
                    Anime Recommendations
                </p>
                <Grid container justifyContent="center">
                    {animeData.map((movie, index) => {
                        return (
                            <Grid item xs={4} md={2} className="poster-row" key={movie.id}>
                                <div onClick={handleClickOpen(index)}>
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
                                        />
                                    </Card>
                                </div>
                            </Grid>
                        );
                    })}
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
                    <DialogTitle id="scroll-dialog-title">{animeData[movieIndex]["title"]}</DialogTitle>
                    <DialogContent>
                        {dialogContent(animeData[movieIndex])}
                        <Button onClick={handleClose}>Close</Button>
                    </DialogContent>
                </Dialog>
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

