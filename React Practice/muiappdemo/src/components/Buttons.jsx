import React from 'react'
import { Button } from '@mui/material'

export default function Buttons() {
    return (
        <div>
            <h1>This is Buttons Demo</h1>
            <Button variant="contained" color="primary">
                Click Me
            </Button>
            <Button variant="contained" color="primary">Contained</Button>
            <Button variant="outlined" color="secondary">Outlined</Button>
            <Button variant="text">Text</Button>

        </div>
    )
}
