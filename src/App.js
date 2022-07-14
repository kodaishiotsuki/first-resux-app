import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function App() {
  //counterにアクセス
  const counter = useSelector((state) => state.counter);
  const isLogin = useSelector((state) => state.isLogin);
  //dispatch
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Hello Redux</h1>
      <h3>カウント:{counter}</h3>
      <button onClick={() => dispatch()}> + </button>
      {isLogin ? <h3>ログイン成功</h3> : <h3>ログインしてください</h3>}
    </div>
  );
}

export default App;
