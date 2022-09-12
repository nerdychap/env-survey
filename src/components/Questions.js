import { Box } from '@mui/system'
import React from 'react'
import { useSurveyContext } from '../constants/hooks'

const Questions = () => {
    const { state } = useSurveyContext()
    return (
        <Box sx={{ maxWidth: 800, m: 'auto', p: 2 }}>
            <Box>
                <h2>Questions</h2>
            </Box>
            <Box>
                {
                    state.map(({ component: Component, id, ...rest }) => <Component key={id}  {...rest} id={id} />)
                }
            </Box>
        </Box>


    )
}

export default Questions