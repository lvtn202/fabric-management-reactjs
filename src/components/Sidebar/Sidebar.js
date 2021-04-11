import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { SidebarData } from "./SidebarData";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 240,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(6),
  },
  topLevel: {
    fontWeight: 500,
  },
}));

export default function NestedList() {
  const classes = useStyles();

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      {SidebarData.map((item, index) => {
        return (
          <div>
            <ListItem button component={Link} to={item.path}>
              <ListItemText
                primary={item.title}
                disableTypography="true"
                className={classes.topLevel}
              />
            </ListItem>
            {item.subNav &&
              item.subNav.map((subItem, subIndex) => {
                return (
                  <ListItem
                    button
                    className={classes.nested}
                    component={Link}
                    to={subItem.path}
                  >
                    <ListItemText primary={subItem.title} />
                  </ListItem>
                );
              })}
          </div>
        );
      })}
    </List>
  );
}
