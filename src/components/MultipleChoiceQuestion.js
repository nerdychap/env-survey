import React from 'react'

const MultipleChoiceQuestion = ({ question, answerType }) => {
    return (
        <div>{question} - {answerType}</div>
    )
}

export default MultipleChoiceQuestion