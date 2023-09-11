import { ADD_STUDENT, GET_STUDENTS } from "./actionTypes"

const initialState = []

export const studentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_STUDENT:
            return [...state, {
                id: action.payload.id,
                name: action.payload.name
            }]
        case GET_STUDENTS:
            return state 
        default:
            return state   
    }
}