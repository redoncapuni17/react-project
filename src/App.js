import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "Car Insurance ",
      amount: 199.99,
      date: new Date(2023, 2, 23),
    },
    {
      id: "e3",
      title: "New Desk (Wodden)",
      amount: 67.0,
      date: new Date(2023, 6, 1),
    },
    {
      id: "e4",
      title: "New Pencil",
      amount: 3.0,
      date: new Date(2023, 6, 1),
    },
  ];

  const addExpenseHandler = expense =>{
    console.log("In App.js");
    console.log(expense);
  }

  /*
  return React.createElement(
    "div",
    {},
    React.createElement("h2", {}, "Let's get started"),
    React.createElement(Expenses,{items: expenses})
  );
*/

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses items = {expenses}/>
    </div>
  );
  
}
export default App;
