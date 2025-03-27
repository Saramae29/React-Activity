import { useState } from "react";
import "./Counter.css";

function Counter({ count, setCount }) {
    return (
      <div className="Counter">
        <div className="Count">
          <p className="count-holder">{count}</p>
          <div className="button-container">
            <button className="button" onClick={() => setCount(count - 1)}>-</button>
            <button className="button" onClick={() => setCount(count + 1)}>+</button>
          </div>
        </div>
      </div>
    );
}

export default Counter;
