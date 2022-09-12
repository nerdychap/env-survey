import { ACTIONS } from "./actions";
import { v4 as uuidv4 } from 'uuid'
import { ANSWER_TYPE, componentsObject } from "../constants/constants";

const surveyReducer = (state, { type, payload }) => {
    let newState = [...state]
    switch (type) {
        case ACTIONS.ADD_QUESTION:
            payload.id = uuidv4()
            if (payload.answerType === ANSWER_TYPE.BOOLEAN) {
                payload.options = ['Yes', 'No']
            }
            payload.component = componentsObject[payload.answerType]
            return [...state, payload]
        case ACTIONS.REMOVE_QUESTION:
            newState = state.filter(({ id }) => id !== payload)
            return newState

        case ACTIONS.EDIT_QUESTION:
            const { component, questionIndex, ...rest } = payload
            newState[questionIndex] = rest
            newState[questionIndex].component = componentsObject[rest.answerType]
            if (rest.answerType === ANSWER_TYPE.BOOLEAN) {
                newState[questionIndex].options = ['Yes', 'No']
            }
            return newState
            case ACTIONS.REORDER_QUESTIONS:
                return payload
        default:
            return state
    }
}

export default surveyReducer