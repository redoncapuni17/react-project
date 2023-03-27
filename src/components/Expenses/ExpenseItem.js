import React,{useState} from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpanseDate from "./ExpenseDate";


function ExpenseItem(props) {

  const [title,setTitle] = useState(props.title);
  const [counter,setCounter]=useState(0);


  const clickHandler = () =>{
  setTitle("Update");
  console.log("Title changed:"+title);

  };
  const clickCounterHandler = () =>{
    setCounter(counter+1);
    console.log("Title changed:"+title);
  
    };
   
  return (
    <Card className="expense-item">
      <ExpanseDate date ={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={clickCounterHandler}>{counter}</button>
    </Card>
  );
}
export default ExpenseItem;
