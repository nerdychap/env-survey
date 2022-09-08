import { Box, Card, FormControl, TextField } from '@mui/material'
import React from 'react'
import QuestionButtons from './QuestionButtons'

const TextQuestion = ({ question, id, answerType }) => {
    return (
        <Card sx={{ p: 2, m: 1 }}>

            <Box sx={{ textAlign: 'start' }}>
                <QuestionButtons question={question} id={id} answerType={answerType} />
                <FormControl>
                    <TextField />
                </FormControl>
            </Box>

        </Card>

    )
}

export default TextQuestion