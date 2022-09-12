import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Button, Typography } from '@mui/material';
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
            <Typography sx={{ fontWeight: 'bold' }} >{question}</Typography>
            <Box>
                <Button sx={{ mx: '3px' }} variant='contained' color='inherit' size='small' onClick={handleEdit} children={<EditIcon color='success' />} />
                <Button sx={{ mx: '3px' }} variant='contained' color='inherit' size='small' onClick={handleDelete} children={<DeleteIcon color='error' />} />
            </Box>
        </Box>
    )
}

export default QuestionButtons