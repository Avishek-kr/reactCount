import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  // const stateChange =()=>{
  //   setCount(count+1);
  // }

  return (
    <div className="App">
      <h1>Hello There !! ✋</h1>
      <h2>My Count is {count} ! </h2>
      <button
        onClick={() => setCount(count - 1)}
        style={{
          backgroundColor: "red",
          padding: "10px 20px",
          border: "transparent",
          fontWeight: "700",
          cursor: "pointer"
        }}
      >
        Decrease
      </button>
      <button
        onClick={() => setCount(0)}
        style={{
          backgroundColor: "blue",
          padding: "10px 20px",
          border: "transparent",
          fontWeight: "700",
          cursor: "pointer"
        }}
      >
        Reset
      </button>
      <button
        onClick={() => setCount(count + 1)}
        style={{
          backgroundColor: "lightgreen",
          padding: "10px 20px",
          border: "transparent",
          fontWeight: "700",
          cursor: "pointer"
        }}
      >
        Click Me
      </button>
    </div>
  );
}
