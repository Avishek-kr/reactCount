import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(20);

  // const stateChange =()=>{
  //   setCount(count+1);
  // }

  return (
    <div className="App">
      <h1>Hello Aashi Baby !! ✋</h1>
      <h2>My Count is {count} ! </h2>
      <button
        onClick={() => setCount(count + 1)}
        style={{
          backgroundColor: "blue",
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
