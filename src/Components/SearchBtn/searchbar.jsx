import React, { useState } from "react";
import "./stylebar.css";
import inputdata from "./input.js";

export default function SearchBtn() {
  const [inputValue, setInputValue] = useState(""); // State for input value
  const [todos, setTodos] = useState(inputdata); // State for array of todos

  const handleInputChange = (event) => {
    setInputValue(event.target.value); // Update the state with the input value
  };

  const handleButtonClick = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const newTodo = inputValue.trim(); // Trim any leading or trailing whitespace
    if (newTodo) {
      setTodos([...todos, newTodo]); // Add newTodo to todos array
      console.log(todos);
      setInputValue(""); // Clear the input field after adding todo
    }
  };

  return (
    <>
      <div className="input-container">
        <input
          type="text"
          className="input-field"
          placeholder="Enter your text here..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className="submit-button" onClick={handleButtonClick}>
          Submit
        </button>
        {/* Display todos */}
        <div className="todo-list">
          <h2>Ur List:</h2>
          <ul>
            {todos.map((todo, index) => (
              <li key={index}>{todo}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

// const windowHeight = window.innerHeight;
// const scrollStep = Math.round(windowHeight / 15); // Adjust scroll step for smoothness
// let scrollCount = 0;

// const storeInput = () => {
//   scrollCount += scrollStep;
//   window.scrollTo(0, scrollCount);

//   if (scrollCount < document.body.scrollHeight - windowHeight) {
//     requestAnimationFrame(scrollStepHandler);
//   }
//   requestAnimationFrame(scrollStepHandler);
// };

// State to store the input value
