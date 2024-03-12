import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import { addTodo, setUserInput } from "../../features/todos/todosSlice";
import { MdOutlinePlaylistAdd } from "react-icons/md";

const TodoLayout = () => {
  const userInput = useSelector((state) => state.todos.userInput);
  const dispatch = useDispatch();

  const handleCreateTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo());
  };

  const handleUserInput = (userInput) => {
    dispatch(setUserInput({ userInput }));
  };

  const styleNavlink = "font-bold py-2 px-4 border-[1px] border-solid border-slate-700 rounded-lg shadow-lg hover:bg-slate-600 hover:text-slate-100 sm:px-6 md:px-8 lg:px-10 ";

  return (
    <div>
      <form onSubmit={handleCreateTodo}>
        <div className="container flex mx-auto items-center align-middle justify-between sm:max-w-md: md:max-w-xl lg:max-w-2xl mt-10 px-1">
          <input type="text" value={userInput} onChange={(e) => handleUserInput(e.target.value)} placeholder="Write your todo here" className="border-2 border-gray-400 rounded-lg px-4 py-3 w-full shadow-lg" />
          <button className="ml-1 text-5xl shadow-lg border-solid border-2 border-slate-700  rounded-lg hover:text-slate-50 hover:bg-slate-800">
            <MdOutlinePlaylistAdd />
          </button>
        </div>
      </form>

      <nav>
        <ul className="flex gap-10 my-7 flex-wrap  container mx-auto justify-between align-middle sm:max-w-md: md:max-w-xl lg:max-w-2xl px-1">
          <li>
            <NavLink to="/" className={styleNavlink}>
              All
            </NavLink>
          </li>
          <li>
            <NavLink to="/incomplete" className={styleNavlink}>
              Incomplete
            </NavLink>
          </li>
          <li>
            <NavLink to="/completed" className={styleNavlink}>
              Completed
            </NavLink>
          </li>
        </ul>
      </nav>
      <section>
        <Outlet />
      </section>
    </div>
  );
};

export default TodoLayout;
