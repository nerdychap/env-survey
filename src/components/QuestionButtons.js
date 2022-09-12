import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Button } from '@mui/material';
import { useSurveyContext } from '../constants/hooks';
import { removeQuestion } from '../store/actions';

const QuestionButtons = ({ question, id, answerType }) => {
    const { dispatch, setSurvey } = useSurveyContext()

    const handleDelete = () => {
        dispatch(removeQuestion(id))
    }
    const handleEdit = () => {
        setSurvey({
            question,
            id,
            answerType,
            options: []
        })
    }
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <h3 >{question}</h3>
            <Box>
                <Button variant='contained' color='success' onClick={handleEdit} children={<EditIcon color='white' />} />
                <Button variant='contained' color='error' onClick={handleDelete} children={<DeleteIcon color='white' />} />
            </Box>
        </Box>
    )
}

export default QuestionButtons