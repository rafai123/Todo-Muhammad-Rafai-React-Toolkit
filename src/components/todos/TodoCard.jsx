import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";
import { IoTrashBinSharp, IoSave } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTodo } from "../../features/todos/todosSlice";

const TodoCard = ({ data, content, completed, onToggle, onRemove }) => {

  const cardStyle = "flex container justify-between mx-auto max-w-full border shadow-lg px-5 py-3 rounded-lg border mt-4 items-center sm:max-w-md: md:max-w-xl lg:max-w-2xl ";
  const contentStyle = " font-medium capitalize text-xl";

  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [localContent, setLocalContent] = useState(content);

  const handleEdit = (e) => {
    setLocalContent(e.target.value);
    let newEdit = {
      ...data,
      text: e.target.value,
    };
    dispatch(editTodo(newEdit));
  };

  const handleBtnEdit = () => {
    if (isEditing) {
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  let taskContent;
  if (isEditing) {
    taskContent = <input type="text" value={localContent} onChange={(e) => handleEdit(e)} className="border-2 border-gray-400 rounded-lg px-4 py-2  " />;
  } else {
    taskContent = <p className={completed ? `line-through  ${contentStyle}` : `${contentStyle}`}>{content}</p>;
  }


  return (
    <div className="px-1">
      <div className={completed ? `bg-slate-700 text-slate-100 ${cardStyle}` : `bg-slate-100 text-slate-700 ${cardStyle}`}>
        {taskContent}
        <div className="flex gap-5 items-center">
          <span className="ml-2 text-slate-700 font-semibold cursor-pointer hover:font-bold  inline-block text-2xl hover:text-green-700" onClick={onToggle}>
            {completed ? <ImCheckboxChecked className="text-slate-100 hover:text-slate-50 hover:shadow-md hover:shadow-slate-50" /> : <ImCheckboxUnchecked  />}
          </span>
          <button onClick={handleBtnEdit} className="ml-2 text-slate-700 font-semibold cursor-pointer hover:font-bold  inline-block text-2xl hover:text-indigo-600">
            {isEditing ? <IoSave className={completed ? "text-slate-100" : "text-slate-700"} /> : <FiEdit className={completed ? "text-slate-100" : "text-slate-700"} />}
          </button>
          <button onClick={onRemove} className="p-2 text-2xl hover:text-rose-500">
            <IoTrashBinSharp />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;