import TodoList from "./components/TodoList";
import Textfield from "@atlaskit/textfield";
import Button from "@atlaskit/button";
import { v4 } from "uuid"; 
import { useCallback} from "react";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [textInput, setTextInput] = useState("" );

  const onTextInputChange = useCallback((e) =>{
      setTextInput(e.target.value)
  }, []); 

  const onAddBtnClick = useCallback(() => {
      setTodoList([...todoList, { id: v4(), name: textInput, isCompleted: false }])
  }, [todoList, textInput]);

  return (
    <>
      <h3>やること一覧</h3>
      <Textfield name="add-todo" placeholder="入力してください" elemAfterInput={
         <Button isDisabled={!textInput} appearance='primary' onClick={onAddBtnClick}>Add</Button>
      }
      css={{ padding : '2px 4px 2px'}}
      value={textInput}
      onChange={onTextInputChange}
      ></Textfield>
      <TodoList todoList={todoList}/>
    </>
  );
}

export default App;
