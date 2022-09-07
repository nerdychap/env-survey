import BooleanQuestion from "../components/BooleanQuestion"
import MultipleChoiceQUestion from "../components/MultipleChoiceQuestion"
import NumberQuestion from '../components/NumberQuestion'
import TextQuestion from '../components/TextQuestion'
import { ANSWER_TYPE } from "../components/SurveyForm"

export const componentsObject = {
    [ANSWER_TYPE.BOOLEAN]: BooleanQuestion,
    [ANSWER_TYPE.NUMBER]: NumberQuestion,
    [ANSWER_TYPE.MULTIPLE_CHOICE]: MultipleChoiceQUestion,
    [ANSWER_TYPE.TEXT]: TextQuestion
}

