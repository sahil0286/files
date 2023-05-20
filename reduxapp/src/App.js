import './App.css';

import { useSelector, useDispatch} from "react-redux";
import { incNumber, decNumber, chgName} from "./action/index"

function App() {
  const myState = useSelector((state)=> state.changeNumber)
  const myNameState = useSelector((state)=> state.changeName)
  const dispatch = useDispatch()
  return (
    <>
      <h2>Increment and Decrement</h2>
      <button onClick={()=> dispatch(incNumber())}>+</button>
      <span>{myState}</span>
      <button onClick={()=> dispatch(decNumber())}>-</button>
      <span>{myNameState}</span>
      <button onClick={()=> dispatch(chgName())}>Change Name</button>
    </>
  );
}

export default App;
