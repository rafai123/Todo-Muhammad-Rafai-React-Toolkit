import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";


import TodoLayout from "../components/todos/TodoLayout";
import AllTodos from "../pages/todos/AllTodos";
import CompletedTodos from "../pages/todos/CompletedTodos";
import IncompletedTodos from "../pages/todos/IncompletedTodos";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<TodoLayout />}>
        <Route index={true} element={<AllTodos />} />
        <Route path="incomplete" element={<IncompletedTodos />} />
        <Route path="completed" element={<CompletedTodos />} />
      </Route>
      <Route path="*" element={<div>404</div>} />
    </>
  )
);

export default router;
