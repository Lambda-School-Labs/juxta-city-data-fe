import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function EditForm({ handleSubmit, handleInputChange, user, setEditing }) {
  const classes = useStyles();
  return (
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        <form
          onSubmit={handleSubmit}
          className={classes.root}
          noValidate
          autoComplete="off"
        >
          <TextField
            label="First Name"
            variant="outlined"
            type="text"
            name="first_name"
            onChange={handleInputChange}
          />

          <TextField
            label="Last Name"
            variant="outlined"
            type="text"
            name="last_name"
            onChange={handleInputChange}
          />

          <TextField
            label="Birthdate"
            variant="outlined"
            type="date"
            name="dob"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleInputChange}
          />

          <TextField
            label="Address"
            variant="outlined"
            type="text"
            name="address"
            onChange={handleInputChange}
          />

          <TextField
            label="City"
            variant="outlined"
            type="text"
            name="city"
            onChange={handleInputChange}
          />

          <TextField
            label="State"
            variant="outlined"
            type="text"
            name="state"
            onChange={handleInputChange}
          />

          <TextField
            label="Zip code"
            variant="outlined"
            type="number"
            name="zip"
            onChange={handleInputChange}
          />
          <Button type="submit" variant="outlined" color="primary" size="large">
            Add profile
          </Button>
        </form>
      </Paper>
    </Grid>
  );
}

export default EditForm;
