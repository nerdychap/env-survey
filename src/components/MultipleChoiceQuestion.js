import { Box, Card, FormControl, MenuItem, Select } from '@mui/material'
import React, { useId, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import QuestionButtons from './QuestionButtons'

const MultipleChoiceQuestion = ({ question, options, id, answerType }) => {
    const elementId = useId()
    const [value, setValue] = useState('')
    const handleChange = ({ target: { value } }) => {
        setValue(value)
    }
    return (
        <Card sx={{ p: 2, m: 1 }}>

            <Box sx={{ textAlign: 'start' }}>
                <QuestionButtons question={question} id={id} answerType={answerType} />
                <FormControl >
                    <Select
                        labelId={elementId}
                        id={elementId}
                        value={value}
                        onChange={handleChange}
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