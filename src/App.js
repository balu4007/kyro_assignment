import { Box } from "@mui/material";
import "./App.css";
import Profile from "./components/Profile/Profile";
import { SideDrawer } from "./components/SideDrawer";

function App() {
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <SideDrawer />
      <div style={{ flex: 1 }}>
        <Profile />
      </div>
    </Box>
  );
}

export default App;
