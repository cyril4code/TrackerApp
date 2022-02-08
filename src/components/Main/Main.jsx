import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Divider,
} from "@material-ui/core";

import Form from "./Form/Form";
import List from "./List/List";

import useStyles from "./styles";

const Main = () => {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <CardHeader title="Expense Tracker" subheader="Powered by speechly" />
        <CardContent>
          <Typography align="center" variant="h5">
            Total Balance ₹100
          </Typography>
          <Typography
            variant="subtitle1"
            style={{ lineHeight: "1.5em", marginTop: "20px" }}
          >
            {/* Info Card */}
            Try saying: Add income for ₹100 in category Salary for Monday
          </Typography>
          <Divider />
          <Form />
        </CardContent>
        <CardContent container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default Main;
