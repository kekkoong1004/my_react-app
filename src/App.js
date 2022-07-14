import React from 'react'
import Expenses from "./components/Expenses/Expenses";
import expenses from "./data/expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {

  const createNewExpenseHandler = (newExpenseData) => {
    expenses.append(newExpenseData)
    console.log(expenses)
  } 
  
  return (
    //Originally react works like below: 
    // React.createElement('div', {}, 
    // React.createElement('h2', {}, `Let's get started!`), 
    // React.createElement(Expenses, {expenses}))

    // However the power of JSX make life easier:
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onNewExpenseCreated={createNewExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
