import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';


function Footer() {
    return(
        <footer> 
            <p>&copy; {new Date.getFullYear()} Study Mate </p>
        </footer>
    );
}

export default Footer