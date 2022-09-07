import React from 'react'

const BooleanQuestion = ({ question, answerType }) => {
    return (
        <div>{question} - {answerType}</div>
    )
}

export default BooleanQuestion