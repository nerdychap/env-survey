import BooleanQuestion from "../components/BooleanQuestion"
import MultipleChoiceQUestion from "../components/MultipleChoiceQuestion"
import NumberQuestion from '../components/NumberQuestion'
import TextQuestion from '../components/TextQuestion'

export const initialSurveyState = {
    question: '',
    options: [],
    answerType: ''
}

export const ANSWER_TYPE = {
    TEXT: 'text',
    BOOLEAN: 'boolean',
    NUMBER: 'number',
    MULTIPLE_CHOICE: 'multiple-choice'
}

export const componentsObject = {
    [ANSWER_TYPE.BOOLEAN]: BooleanQuestion,
    [ANSWER_TYPE.NUMBER]: NumberQuestion,
    [ANSWER_TYPE.MULTIPLE_CHOICE]: MultipleChoiceQUestion,
    [ANSWER_TYPE.TEXT]: TextQuestion
}

