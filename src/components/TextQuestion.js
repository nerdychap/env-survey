import { Box, FormControl, TextField } from '@mui/material'
import React from 'react'

const TextQuestion = ({ question }) => {
    return (
        <Box sx={{textAlign: 'start'}}>
            <FormControl>
                <h5>{question}</h5>
                <TextField />
            </FormControl>
        </Box>

    )
}

export default TextQuestion