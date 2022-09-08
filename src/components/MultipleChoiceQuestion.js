import { Box, FormControl, MenuItem, Select } from '@mui/material'
import React, { useId } from 'react'
import { v4 as uuidv4 } from 'uuid'

const MultipleChoiceQuestion = ({ question, options }) => {
    const id = useId()
    return (
        <Box sx={{textAlign: 'start'}}>
            <FormControl >
                <h5 id={id}>{question}</h5>
                <Select
                    labelId={id}
                    id={id}
                >
                    {
                        options.map((item) => <MenuItem key={uuidv4} value={item}>{item}</MenuItem>)
                    }
                </Select>
            </FormControl>
        </Box>

    )
}

export default MultipleChoiceQuestion