import React, { useContext } from "react";
import {
  List as MUIList,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  ListItemSecondaryAction,
  IconButton,
  Slide,
} from "@material-ui/core";
import { Delete, MoneyOff } from "@material-ui/icons";

import useStyles from "./styles";
import { ExpenseTrackerContext } from "../../../context/context";

const List = () => {
  const classes = useStyles();
  const globalState = useContext(ExpenseTrackerContext);

  console.log(globalState);

  const transactions = [
    {
      id: 1,
      type: "Income",
      category: "Salary",
      date: "Tue Feb 02 2022",
      amount: 50,
    },
    {
      id: 2,
      type: "Expense",
      category: "Pets",
      date: "Tue Feb 05 2022",
      amount: 100,
    },
    {
      id: 1,
      type: "Income",
      category: "Business",
      date: "Tue Feb 10 2022",
      amount: 120,
    },
  ];

  return (
    <MUIList dense={false} className={classes.list}>
      {transactions.map((transactions) => (
        <Slide
          direction="down"
          in
          mountOnEnter
          unmountOnExit
          key={transactions.id}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar
                className={
                  transactions.type === "Income"
                    ? classes.avatarIncome
                    : classes.avatarExpense
                }
              >
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={transactions.category}
              secondary={`₹${transactions.amount} - ${transactions.date}`}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-aria-label="delete" onClick=" ">
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  );
};

export default List;
