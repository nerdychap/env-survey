import { Button, FormControl, IconButton, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { Fragment, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';

const ANSWER_TYPE = {
    TEXT: 'text',
    BOOLEAN: 'boolean',
    NUMBER: 'number',
    MULTIPLE_CHOICE: 'multiple-choice'
}
const initialSurveyState = {
    question: '',
    options: [],
    answerType: ''
}
const SurveyForm = () => {
    const [survey, setSurvey] = useState(initialSurveyState)
    const [option, setOption] = useState('')
    const handleInputChange = ({ target: { name, value } }) => {
        setSurvey(prevState => ({
            ...prevState
            , [name]: value
        }))
    }
    const handleChangeOption = ({ target: { value } }) => {
        setOption(value)
    }
    const handleAddOption = () => {
        setSurvey(prevState => ({ ...prevState, options: [...prevState.options, option] }))
        setOption('')
    }
    const handleAddQuestion = (event) => {
        event.preventDefault()
        setSurvey(initialSurveyState)
    }
    return (
        <Box sx={{ minWidth: 120, backgroundColor: 'lightblue', p: 5 }}>
            <form onSubmit={handleAddQuestion}>
                <FormControl>
                    <TextField label="Enter question" name="question" onChange={handleInputChange} value={survey.question} required />
                </FormControl>
                <FormControl sx={{ minWidth: 200 }}>
                    <InputLabel id="select-label">Answer Type</InputLabel>
                    <Select
                        value={survey.answerType}
                        label="Answer Type"
                        labelId="select-label"
                        name="answerType"
                        onChange={handleInputChange}
                        defaultValue="Answer Type"
                        required
                    >
                        <MenuItem value={ANSWER_TYPE.TEXT}>Text</MenuItem>
                        <MenuItem value={ANSWER_TYPE.BOOLEAN}>Boolean</MenuItem>
                        <MenuItem value={ANSWER_TYPE.NUMBER}>Number</MenuItem>
                        <MenuItem value={ANSWER_TYPE.MULTIPLE_CHOICE}>Multiple Choice</MenuItem>
                    </Select>
                </FormControl>
                {
                    survey.answerType === ANSWER_TYPE.MULTIPLE_CHOICE &&
                    <Fragment>
                        <FormControl>
                            <TextField label="answer option" name="answerOption" onChange={handleChangeOption} value={option} />
                        </FormControl>
                        <Button children={<AddIcon />} onClick={handleAddOption} disabled={survey.options.length === 0 && !Boolean(option)} />
                    </Fragment>
                }
                <Button variant='contained' type='submit'>Add Question</Button>
            </form>
        </Box>
    )
}

export default SurveyForm