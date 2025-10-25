import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";
import { Button, FormControl, ListGroupItem } from "react-bootstrap";

export default function TodoForm() {
  const { todo } = useSelector((state: any) => state.todosReducer);
  const dispatch = useDispatch();
  return (
    <ListGroupItem className="d-flex justify-content-between align-items-center">
      <FormControl
        value={todo.title}
        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
        className="me-4 flex-grow-1"
      />
      <Button
        variant="warning"
        onClick={() => dispatch(updateTodo(todo))}
        className="me-1"
      >
        Update
      </Button>
      <Button
        variant="success"
        onClick={() => dispatch(addTodo(todo))}
      >
        Add
      </Button>
    </ListGroupItem>
  );
}
