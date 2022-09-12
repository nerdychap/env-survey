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
        <Box sx={{ maxWidth: 800, m: 'auto', p: 2 }}>
            <Box>
                <h2>Questions</h2>
            </Box>
            <ReactSortable
                list={state}
                setList={handleDrag}
            >
                {
                    state.map(({ component: Component, id, ...rest }) => <Component key={id}  {...rest} id={id} />)
                }
            </ReactSortable>
        </Box>


    )
}

export default Questions