import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Alert from "@material-ui/lab/Alert";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

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
  gone: {
    display: "none",
  },
  display: {
    display: "block",
    width: "30%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
    marginTop: 20,
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

export default function ReviewForm(props) {
  const productId = parseInt(props.match.params.id);

  const classes = useStyles();
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");
  const [rank, setRank] = useState(4);
  const [hover, setHover] = useState(-1);
  const [product, setProduct] = useState("");
  const [show, setShow] = useState(false);

  // Get the product's name
  useEffect(() => {
    async function fetchData() {
      const products = await axios("http://localhost:3004/products");
      setProduct(products.data.filter((p) => p.id === productId)[0]["name"]);
    }
    fetchData();
  }, [productId]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleSubmit = () => {
    axios
      .post(`http://localhost:3004/products/${productId}/reviews`, {
        author: name,
        star_rating: rank,
        headline: title,
        body: review,
        productId: productId,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    setName("");
    setTitle("");
    setReview("");
    setRank(4);
    setShow(true);
  };

  const HoverRating = () => {
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
  };

  return (
    // - Title with the product name
    // - From: User Name, Ranking, Title, Review
    // - Submit Button: POST, Reset the Form, Pup up Box
    // - Links to Home and Review page
    <form className={classes.root} noValidate autoComplete="off">
      <h1>
        {" "}
        <span role="img" aria-label="write-a-review">
          ✍
        </span>{" "}
        Write A Review for {product}
      </h1>
      <div className="form">
        <Grid item xs={12}>
          <TextField
            id="outlined-textarea"
            label="Your Full Name"
            multiline
            variant="outlined"
            onChange={handleNameChange}
            value={name}
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
            value={title}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-multiline-static"
            label="Leave a review"
            multiline
            rows={4}
            value={review}
            variant="outlined"
            onChange={handleReviewChange}
          />
        </Grid>
      </div>
      <Button variant="contained" className="btn" onClick={handleSubmit}>
        Submit
      </Button>
      <Alert
        severity="success"
        className={show ? classes.display : classes.gone}
      >
        Thank you for your review!
      </Alert>
      <Link className={classes.backHome} to="/">
        Back to Home{" "}
        <span role="img" aria-label="homepage">
          🏠
        </span>
      </Link>
      <Link className={classes.backHome} to={`/reviews/${productId}`}>
        Read All Reviews{" "}
        <span role="img" aria-label="write-a-review">
          👀
        </span>
      </Link>
    </form>
  );
}
