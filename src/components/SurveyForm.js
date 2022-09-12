import AddIcon from '@mui/icons-material/Add';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { Fragment, useState } from 'react';
import { useSurveyContext } from '../constants/hooks';
import { addQuestion, editQuestion } from '../store/actions';
import { ANSWER_TYPE, initialSurveyState } from '../constants/constants'

const SurveyForm = () => {
    const [option, setOption] = useState('')
    const { dispatch, survey, setSurvey, state } = useSurveyContext()
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
        const questionIndex = state.findIndex(({ id }) => survey.id === id)
        if (questionIndex === -1) {
            dispatch(addQuestion(survey))
        }
        else {
            dispatch(editQuestion({ ...survey, questionIndex }))
        }
        setSurvey(initialSurveyState)

    }
    return (
        <Box sx={{ p: 5 }}>
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
                        <Button children={<AddIcon />} variant="contained" onClick={handleAddOption} disabled={survey.options.length === 0 && !Boolean(option)} />
                    </Fragment>
                }
                <Button variant='contained' type='submit' size='large' disabled={survey.answerType === ANSWER_TYPE.MULTIPLE_CHOICE && survey.options.length === 0}>Add Question</Button>
            </form>
        </Box>
    )
}

export default SurveyForm