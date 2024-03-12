import { useDispatch, useSelector } from "react-redux";
import TodoCard from "../../components/todos/TodoCard";
import { deleteTodo, toggleTodo } from "../../features/todos/todosSlice";

function AllTodos() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleToggle = (id) => {
    dispatch(toggleTodo({ id }));
  };

  const handleRemove = (id) => {
    dispatch(deleteTodo({ id }));
  };

  return (
    <>
      {todos.map((todo, index) => (
        <TodoCard key={index} data={todo} content={todo.text} completed={todo.completed} onToggle={() => handleToggle(todo.id)} onRemove={() => handleRemove(todo.id)} />
      ))}
    </>
  );
}

export default AllTodos;
