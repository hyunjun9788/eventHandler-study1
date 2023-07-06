
import './App.css';
import {useState} from "react";
import Button from "./components/Button";

function App() {
    const [text, setText] = useState('확인하기')
    const[disable, setDisable] =useState(false)
    const buttonClickHandler = () => {
        setText('확인됨')
        setDisable(true)
    }
  return (
    <Button onClick={buttonClickHandler} disabled={disable}>{text}</Button>
  );
}

export default App;
