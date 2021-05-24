import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { SidebarData } from "./sidebar_data";
import { Link } from "react-router-dom";
import { APP_ADMIN } from "../../constants/user_roles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    whiteSpace: "nowrap",
    width: 300,
    height: "88vh",
    overflow: "auto",
    backgroundColor: theme.palette.background.paper,
    borderRight: "rgba(0, 0, 0, 0.12) solid 1px",
  },
  nested: {
    paddingLeft: theme.spacing(3),
  },
  topLevel: {
    fontWeight: 500,
  },
}));

export default function Sidebar(props) {
  const classes = useStyles();
  const { userRole } = props;
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      {SidebarData.map((item, index) => {
        return (
          (userRole.includes(APP_ADMIN) || !item.admin) && (
            <div key={index}>
              <ListItem>
                <ListItemText
                  primary={item.title}
                  disableTypography={true}
                  className={classes.topLevel}
                />
              </ListItem>
              {item.subNav &&
                item.subNav.map((subItem, subIndex) => {
                  return (
                    <ListItem
                      selected={subItem.path === window.location.pathname}
                      button
                      className={classes.nested}
                      component={Link}
                      to={subItem.path}
                      key={subIndex}
                    >
                      <ListItemText primary={subItem.title} />
                    </ListItem>
                  );
                })}
            </div>
          )
        );
      })}
    </List>
  );
}
