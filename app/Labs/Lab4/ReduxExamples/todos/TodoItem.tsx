"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";
import { ListGroupItem, Button } from "react-bootstrap";

export default function TodoItem({ todo }: {
  todo: { id: string; title: string };
}) {
  const dispatch = useDispatch();
  return (
    <ListGroupItem className="d-flex justify-content-between align-items-center">
      <span className="me-5 flex-grow-1">{todo?.title}</span>
      <Button
        variant="primary"
        onClick={() => dispatch(setTodo(todo))}
        className="me-1"
      >
        Edit
      </Button>
      <Button
        variant="danger"
        onClick={() => dispatch(deleteTodo(todo?.id))}
      >
        Delete
      </Button>
    </ListGroupItem>
  );
}
