import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    margin: "auto",
    marginBottom: 20,
    maxWidth: 180,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  btn: {
    marginBottom: 5,
    width: 180,
  },
  name: {
    paddingLeft: 10,
  },
  link: {
    textDecoration: "none",
  },
}));

export default function ComplexGrid({ name, id }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <Grid className={classes.image}>
              <img
                className={classes.img}
                alt={name}
                src="https://icon-library.com/images/product-icon-png/product-icon-png-1.jpg"
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Typography
                gutterBottom
                variant="subtitle1"
                className={classes.name}
              >
                {name} ⭐
              </Typography>
              <Grid item>
                <Typography variant="body2" style={{ cursor: "pointer" }}>
                  <Link to="/reviews/:id">
                    <Button
                      className={classes.btn}
                      variant="contained"
                      color="primary"
                    >
                      Read Reviews 👀
                    </Button>
                  </Link>
                  <Link to={`/write_review/${id}`} className={classes.link}>
                    <Button
                      className={classes.btn}
                      variant="contained"
                      color="secondary"
                    >
                      Write A Review ✍️
                    </Button>
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
