import React from 'react'
import { Card, CardContent, Typography } from "@mui/material";

export default function Cards() {
    return (
        <div>
            <h1>This is Cards Demo</h1>
            <hr />
            <Card>
                <CardContent>
                    <Typography variant="h5">Card Title</Typography>
                    <Typography variant="body2">Card Content</Typography>
                </CardContent>
            </Card>
        </div>
    )
}
