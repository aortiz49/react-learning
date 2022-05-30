import { Fragment } from "react";
import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <Fragment>
      <div className="expense-item">
        <div>May 22, 2022</div>
        <h2 className="expense-item__description">Car Insurance</h2>
        <div className="expense-item__price">$289.33</div>
      </div>
    </Fragment>
  );
}

export default ExpenseItem;
