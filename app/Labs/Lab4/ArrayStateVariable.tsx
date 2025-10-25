import { useSelector } from "react-redux";
import { ListGroup, ListGroupItem } from "react-bootstrap";

export default function ArrayStateVariable() {
  const { todos } = useSelector((state: { todosReducer: { todos: { id: string; title: string }[] } }) => state.todosReducer);
  return (
  <div id="wd-array-state-variables">
    <h2>Array State Variable</h2>
      <ListGroup>
        {todos.map((todo: any) => (
          <ListGroupItem key={todo.id}>
            {todo.title}
          </ListGroupItem>
        ))}
      </ListGroup>
      <hr />
      ...
    </div>);}
