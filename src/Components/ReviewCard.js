import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

export default function ReviewCard({ name, title, content, rank }) {
  const classes = useStyles();

  // Method: Translate Number to Stars
  const star_rank = (rank) => {
    let res = [];
    for (let i = 0; i < rank; i++) {
      res.push("⭐");
    }
    return res.join("");
  };

  return (
    // Info: User Image, Title, Stars, User Name, Review Content
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={name} src="#" />
        </ListItemAvatar>
        <ListItemText
          primary={title + " " + star_rank(rank)}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {name}
              </Typography>
              {" - "}
              {content}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
