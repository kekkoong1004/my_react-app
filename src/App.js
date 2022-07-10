import React from 'react'
import Expenses from "./components/Expenses";
import expenses from "./data/expenses";

function App() {
  
  return (
    //Originally react works like below: 
    // React.createElement('div', {}, 
    // React.createElement('h2', {}, `Let's get started!`), 
    // React.createElement(Expenses, {expenses}))

    // However the power of JSX make life easier:
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
