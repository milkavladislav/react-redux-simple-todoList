import React from "react";
import "./TodoItem.css";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch } from "react-redux";
import { setCheck } from "../features/todoSlice";

const TodoItem = ({ name, id, done }) => {
    const dispatch = useDispatch();

    const handleChange = () => {
        dispatch(setCheck(id));
    };
    return (
        <div className="todoItem">
            <Checkbox
                checked={done}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
            />
            <p className={done && "todoItem--done"}>{name}</p>
        </div>
    );
};

export default TodoItem;
