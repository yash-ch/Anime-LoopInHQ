import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import {Card, CardMedia} from "@mui/material";
import Box from "@mui/material/Box";
import DialogContentText from "@mui/material/DialogContentText";
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

export function dialogContent(animeDataWithIndex) {
    return (<div>
        <DialogTitle id="scroll-dialog-title">{animeDataWithIndex["title"]}</DialogTitle>
        <DialogContent dividers={true}>
            <Card>
                <CardMedia
                    component="img"
                    image={animeDataWithIndex["movie_banner"]}
                    alt={animeDataWithIndex.title}
                    className="card-image"
                />
            </Card>
            <Box style={{height: "20px"}}/>
            {animeInformationTitleList.map((type) => {
                return (
                    <div>
                        <DialogContentText
                            id="scroll-dialog-description"
                            tabIndex={-1}
                            className={"dialog-info-title"}
                        >
                            {type.name}
                        </DialogContentText>
                        <DialogContentText
                            id="scroll-dialog-description"
                            tabIndex={-1}>
                            {animeDataWithIndex[type.id]}
                        </DialogContentText>
                    </div>
                );
            })}
        </DialogContent>
    </div>)

}