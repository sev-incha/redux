import React from "react";
import { List, ListItem, ListItemText} from "@mui/material";
import { useSelector } from "react-redux";

export const StudentList = (props) => {
    // const StudentList = [
    //     {
    //         id: 'student-1',
    //         name: 'Fathulla'
    //     },
    //     {
    //         id: 'student-2',
    //         name: 'Khodjiakbar'
    //     },
    //     {
    //         id: 'student-3',
    //         name: 'Muhammad'
    //     },
    //     {
    //         id: 'student-4',
    //         name: 'Akhmatjon'
    //     },
    //     {
    //         id: 'student-5',
    //         name: 'Odil'
    //     },
    //     {
    //         id: 'student-6',
    //         name: 'Dong Gyu'
    //     }

    // ]
    const studentList = useSelector((state) => state)

    return (
       <List>
        {studentList.length ? studentList.map(student => (
            <ListItem key={student.id}>
                <ListItemText primary={student.name} />
            </ListItem>
        )) : <h2> Сптсок пустой </h2>}
       </List> 
    )
}