import React from 'react'

const TextQuestion = ({ question, answerType }) => {
    return (
        <div>{question} - {answerType}</div>

    )
}

export default TextQuestion