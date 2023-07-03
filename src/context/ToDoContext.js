import { createContext, useContext, useRef, useState } from 'react';

//create a new context
const GlobalTodoContext = createContext({});

//create a provider (component)
export const TodoContextProvider = (props) => {
    let [todoList, setTodoList] = useState([]);
    let [input, setInput] = useState("");

    //let [inputValue, setInputValue] = useState("");

    // useRef give a way to connect with real DOM logic
    // useRef collect data from child to parent

    //let inputRef = useRef();

    // on change input
    // const inputChange = (event) => {
    //     let {value} = event.target;
    //     console.log(inputRef);
    //     inputRef.current.style.backgroundColor = "red";
    //     //setInputValue(value);
    // };

    // save todo
    const saveTodo = (event) => {
        // prevent default submssion
        event.preventDefault();
        //let inputValue = inputRef.current.value;

        // check if input value is not empty
        if(input !== "") {
            let newTodo = { title:input, isCompleted:false }
            setTodoList([newTodo, ...todoList]);
            
            //reset input value
            setInput("");
        }
    };

    // updateTodoStatus
    const updateTodoStatus = (index)=>{
        const _todoList = [...todoList];
        _todoList[index].isCompleted = !_todoList[index].isCompleted;
        // !true === false
        setTodoList(_todoList);
    };

    let store = {
        todoList,
        input,
        setInput,
        saveTodo,
        updateTodoStatus,
    };
    
    return (
    <>
        <GlobalTodoContext.Provider value={store}>
            {props.children}
        </GlobalTodoContext.Provider>
    </>
    );
}

// create a custom hook :: we will use it to access a dadta of context
// useTodoContext is use in other components
export const useTodoContext = () => {
    return useContext(GlobalTodoContext);
};

// useTodoContext == useSelector (Redux)