import { ACTIONS } from "./actions";
import { v4 as uuidv4 } from 'uuid'
import { ANSWER_TYPE } from "../components/SurveyForm";
import { componentsObject } from "../constants/constants";

const surveyReducer = (state, { type, payload }) => {
    switch (type) {
        case ACTIONS.ADD_QUESTION:
            payload.id = uuidv4()
            if (payload.answerType === ANSWER_TYPE.BOOLEAN) {
                payload.options = ['Yes', 'No']
            }
            payload.component = componentsObject[payload.answerType]
            return [...state, payload]
        default:
            return state
    }
}

export default surveyReducer