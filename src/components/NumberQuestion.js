import { Box, FormControl, TextField } from '@mui/material'
import React from 'react'

const NumberQuestion = ({ question }) => {
    return (
        <Box sx={{textAlign: 'start'}}>
            <FormControl>
                <h5>{question}</h5>
                <TextField type="number" />
            </FormControl>
        </Box>


    )
}

export default NumberQuestion