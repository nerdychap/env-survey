export const ACTIONS = {
    ADD_QUESTION: 'addQuestion',
    REMOVE_QUESTION: 'removeQuestion',
    EDIT_QUESTION: 'editQuestion',
    REORDER_QUESTIONS: 'reorderQuestions'
}

export const addQuestion = (payload) => ({ type: ACTIONS.ADD_QUESTION, payload })
export const removeQuestion = (payload) => ({ type: ACTIONS.REMOVE_QUESTION, payload })
export const editQuestion = (payload) => ({ type: ACTIONS.EDIT_QUESTION, payload })
export const reorderQuestions = (payload) => ({ type: ACTIONS.REORDER_QUESTIONS, payload })

