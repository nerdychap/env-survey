import { Box } from '@mui/system'
import React from 'react'
import { useSurveyContext } from '../constants/hooks'

const Questions = () => {
    const { state } = useSurveyContext()
    return (
        <Box sx={{ maxWidth: 800 ,boxShadow: '0px 0px 5px lightgrey', borderRadius: 1, m: 'auto', p: 2}}>
            <Box>
                <h3>Questions</h3>
            </Box>
            <Box>
                {
                    state.map(({ component: Component, id, ...rest }) => <Component key={id} {...rest} />)
                }
            </Box>
        </Box>


    )
}

export default Questions