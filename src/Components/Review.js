import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  RankingRoot: {
    width: 200,
    display: "flex",
    alignItems: "center",
  },
  backHome: {
    marginTop: 30,
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

export default function Review(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState("Controlled");
  const [name, setName] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [review, setReview] = React.useState("");
  const [rank, setRank] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleReviewChange = (event) => {
    setReview(event.target.value);
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
      <h1>✍ Write A Review </h1>
      <div className="form">
        <Grid item xs={12}>
          <TextField
            id="outlined-textarea"
            label="Your Full Name"
            multiline
            variant="outlined"
            onChange={handleNameChange}
          />
        </Grid>
        <Grid item xs={12}>
          {HoverRating()}
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-textarea"
            label="Review Title"
            multiline
            variant="outlined"
            onChange={handleTitleChange}
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
            onChange={handleReviewChange}
          />
        </Grid>
      </div>
      <Button
        variant="contained"
        className="btn"
        onClick={() => {
          console.log("click");
          axios
            .post(
              `http://localhost:3004/products/${props.match.params.id}/reviews`,
              {
                author: name,
                star_rating: rank,
                headline: title,
                body: review,
                productId: props.match.params.id,
              }
            )
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
        }}
      >
        Submit
      </Button>
      <Link className={classes.backHome} to="/">
        Back to Home 🏠
      </Link>
      <Link className={classes.backHome} to="/">
        Read All Reviews 👀
      </Link>
    </form>
  );
}
