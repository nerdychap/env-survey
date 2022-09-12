import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { ReactSortable } from 'react-sortablejs'
import { useSurveyContext } from '../constants/hooks'
import { reorderQuestions } from '../store/actions'

const Questions = () => {
    const { state, dispatch } = useSurveyContext()
    const handleDrag = (newState) => {
        dispatch(reorderQuestions(newState))
    }
    return (
        <Box sx={{ maxWidth: 600, m: 'auto', p: 2, backgroundColor: 'white' }}>
            <Box>
                <h2>Questions</h2>
            </Box>
            {state.length === 0 ?
                <Box>
                    <Typography>Add questions!</Typography>
                </Box> :
                <ReactSortable
                    list={state}
                    setList={handleDrag}
                >
                    {
                        state.map(({ component: Component, id, ...rest }) => <Component key={id}  {...rest} id={id} />)
                    }
                </ReactSortable>
            }
        </Box>


    )
}

export default Questions