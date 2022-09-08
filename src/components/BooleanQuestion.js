import { Box, Card, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import React from 'react';
import QuestionButtons from './QuestionButtons';

const BooleanQuestion = ({ question, options, id, answerType }) => {
    return (
        <Card sx={{ p: 2, m: 1 }}>
            <Box sx={{ textAlign: 'start' }}>
                <QuestionButtons question={question} id={id} answerType={answerType} />
                <RadioGroup
                    defaultValue={options[0]}
                    name="radio-buttons-group"
                >
                    <FormControlLabel value={options[0]} control={<Radio />} label={options[0]} />
                    <FormControlLabel value={options[1]} control={<Radio />} label={options[1]} />
                </RadioGroup>
            </Box>
        </Card>
    )
}

export default BooleanQuestion