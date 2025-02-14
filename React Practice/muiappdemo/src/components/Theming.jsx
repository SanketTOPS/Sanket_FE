import React from 'react'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#1976d2",
        },
        secondary: {
            main: "#dc004e",
        },
    },
});

export default function Theming() {
    return (
        <div>
            <h1>This is Theming Demo</h1>
            <hr />
            <ThemeProvider theme={theme}>
                <Button variant="contained" color="primary">Custom Theme</Button>
            </ThemeProvider>
        </div>
    )
}
