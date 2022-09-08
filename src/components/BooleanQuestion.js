import { Box, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import React from 'react'

const BooleanQuestion = ({ question, options }) => {
    return (
        <Box sx={{textAlign: 'start'}}>
            <h5 >{question}</h5>
            <RadioGroup
                defaultValue={options[0]}
                name="radio-buttons-group"
            >
                <FormControlLabel value={options[0]} control={<Radio />} label={options[0]} />
                <FormControlLabel value={options[1]} control={<Radio />} label={options[1]} />
            </RadioGroup>
        </Box>
    )
}

export default BooleanQuestion