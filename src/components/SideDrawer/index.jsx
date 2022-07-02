import {
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import React from "react";
import { getIcon } from "../helper";
import logo from "../../static/images/KYRO.jpg";

const drawerWidth = 240;

export function SideDrawer(props) {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar>
        <Avatar alt="Remy Sharp" src={logo} sx={{ width: "150px" }} />
      </Toolbar>
      <Toolbar />
      <List>
        {[
          "Home",
          "Projects",
          "Dashboard",
          "Messages",
          "Documents",
          "Organizations",
          "Settings",
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{getIcon(index)}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
