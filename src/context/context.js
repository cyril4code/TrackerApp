import React, { useReducer, createContext } from "react";

import contexReducer from "./contextReducer";

const initialState = [];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [tracactions, dispatch] = useReducer(contexReducer, second);

  //Action creators
  const deleteTransctions = (id) => {
    dispatch({ type: "DELETE_TRANSCTIONS", payload: id });
  };

  const addTransactions = (transactions) => {
    dispatch({ type: "ADD_TRANSACTIONS", payload: id });
  };

  return (
    <ExpenseTrackerContext.Provider value={{ appName: "Expense Tracker" }}>
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
