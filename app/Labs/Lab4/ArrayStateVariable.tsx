import { useSelector } from "react-redux";
import { ListGroup, ListGroupItem } from "react-bootstrap";

export default function ArrayStateVariable() {
  const { todos } = useSelector((state: { todosReducer: { todos: { id: string; title: string; completed: boolean }[] } }) => state.todosReducer);
  return (
  <div id="wd-array-state-variables">
    <h2>Array State Variable</h2>
      <ListGroup>
        {todos.map((todo: { id: string; title: string; completed: boolean }) => (
          <ListGroupItem key={todo.id}>
            {todo.title}
          </ListGroupItem>
        ))}
      </ListGroup>
      <hr />
      ...
    </div>);}
