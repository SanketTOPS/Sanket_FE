import React from 'react'
import { AppBar, Toolbar, Typography } from "@mui/material";

export default function AppBarcmp() {
    return (
        <div>

            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">My App</Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
