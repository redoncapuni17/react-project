import React,{useState} from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpanseDate from "./ExpenseDate";


const ExpenseItem = (props) => {

  const [title,setTitle] = useState(props.title);

  const clickHandler = () =>{
  setTitle("Update");
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
   
    </Card>
  );
}
export default ExpenseItem;
