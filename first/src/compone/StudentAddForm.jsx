import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addNewStudent } from "../store/actions";

export const StudentAddForm = (props) => {
    const [studentId, setStudentId] = useState(null)
    const [studentName, setStudentName] = useState('')
    const dispatch = useDispatch()

    const handleAddUser = () => {
        dispatch(addNewStudent ({
            id: studentId,
            name: studentName,
        })) 
        
        setStudentId(null)
        setStudentName('')
    }

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                variant="outlined"
                placeholder="id"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
            />
            <TextField
                variant="outlined"
                placeholder="Имя студента"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
            />
            <Button variant="contained" onClick={handleAddUser}>
                Добавить студента
            </Button>
        </Box>
    )
}