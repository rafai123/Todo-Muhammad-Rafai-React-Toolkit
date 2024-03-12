export function saveTodosToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("todosFromLocalStorage", serializedState);
  } catch (e) {
    console.error(e);
  }
}

export function loadTodosFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("todosFromLocalStorage");
    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);
    
  } catch (e) {
    console.error(e);
    return undefined;
  }
}
