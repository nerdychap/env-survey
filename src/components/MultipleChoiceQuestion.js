import { Box, Card, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useId, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import QuestionButtons from './QuestionButtons'

const MultipleChoiceQuestion = ({ question, options, id, answerType }) => {
    const elementId = useId()
    const [value, setValue] = useState('Option')
    const handleChange = ({ target: { value } }) => {
        setValue(value)
    }
    return (
        <Card sx={{ p: 2, m: 1 }}>
            <Box sx={{ textAlign: 'start' }}>
                <QuestionButtons question={question} id={id} answerType={answerType} />
                <FormControl sx={{minWidth: 200}}>
                    <InputLabel id={elementId}>Options</InputLabel>
                    <Select
                        labelId={elementId}
                        label="Option"
                        value={value}
                        onChange={handleChange}
                        defaultValue="Option"
                        sx={{ minWidth: 200 }}
                        name="option"
                    >
                        {
                            options.map((item) => <MenuItem key={uuidv4()} value={item}>{item}</MenuItem>)
                        }
                    </Select>
                </FormControl>
            </Box>
        </Card>

    )
}

export default MultipleChoiceQuestion