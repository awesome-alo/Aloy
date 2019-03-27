import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";

const style = {
  toolBarButton: {
    marginRight: "14px"
  }
};

export default class extends React.Component {
  render() {
    return (
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            color="inherit"
            style={style.toolBarButton}
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Alo
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}
