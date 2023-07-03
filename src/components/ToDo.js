import ToDoHeader from "./ToDoHeader";
import ToDoInput from "./ToDoInput";
import ToDoList from "./ToDoList";

const ToDo = () => {
    return (
    <>
        <ToDoHeader text="Todo List Application"/>
        <ToDoInput />
        <ToDoList />
    </>
    );
};

export default ToDo;