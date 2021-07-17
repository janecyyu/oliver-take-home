import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import Ranking from "./Ranking";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  RankingRoot: {
    width: 200,
    display: "flex",
    alignItems: "center",
  },
}));

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

export default function Review() {
  const classes = useStyles();
  const [value, setValue] = React.useState("Controlled");
  const [rank, setRank] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  function HoverRating() {
    const classes = useStyles();

    return (
      <div className={classes.RankingRoot}>
        <Rating
          name="hover-feedback"
          value={rank}
          precision={0.5}
          onChange={(event, newValue) => {
            setRank(newValue);
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
        />
        {rank !== null && (
          <Box ml={2}>{labels[hover !== -1 ? hover : rank]}</Box>
        )}
      </div>
    );
  }

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
        {HoverRating()}
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
