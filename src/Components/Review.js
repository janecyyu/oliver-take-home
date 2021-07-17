import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Ranking from "./Ranking";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function Review() {
  const classes = useStyles();
  const [value, setValue] = React.useState("Controlled");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <h1>Write A Review ✍ </h1>
      <div>
        <Grid item xs={12}>
          <TextField
            id="outlined-textarea"
            label="Your Full Name"
            multiline
            variant="outlined"
          />
        </Grid>
        {/* stars */}
        <Ranking />
        <Grid item xs={12}>
          <TextField
            id="outlined-textarea"
            label="Review Title"
            multiline
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-multiline-static"
            label="Leave a review"
            multiline
            rows={4}
            defaultValue=""
            variant="outlined"
          />
        </Grid>
      </div>
    </form>
  );
}
