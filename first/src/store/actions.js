import { GET_STUDENTS, ADD_STUDENT } from "./actionTypes";

export const getStudenList = ( ) => {
    return {
        type: GET_STUDENTS,
        payload: null,
    }
}

export const addNewStudent = (student) =>{
    return{
        type: ADD_STUDENT,
        payload: student
    }
}