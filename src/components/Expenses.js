import React, { useState } from "react";
import "./Expenses.css";
import Card from "./Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from './ExpensesList';
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {

  const [filterYear, setfilterYear] = useState("2022");

  const SaveStateFilterHandler = (selectedYear) => {
    setfilterYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <Card className="expenses">

        <ExpenseFilter
          selected={filterYear}
          onSaveStateFilter={SaveStateFilterHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
