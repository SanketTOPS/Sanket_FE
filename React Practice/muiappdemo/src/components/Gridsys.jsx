import React from 'react'
import { Grid } from "@mui/material";

export default function Gridsys() {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <div style={{ backgroundColor: "lightgray", padding: "10px" }}>Left</div>
                </Grid>
                <Grid item xs={6}>
                    <div style={{ backgroundColor: "lightblue", padding: "10px" }}>Right</div>
                </Grid>
            </Grid>
        </div>
    )
}
