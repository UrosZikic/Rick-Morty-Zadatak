import { Button, TextField, Box } from "@mui/material";
// import axios from "axios";

function App() {
  return (
    <div className="App">
      <div style={{ padding: 20 }}>
        <Box
          component="form"
          sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Box>
        <Button variant="contained" color="primary">
          submit placeholder
        </Button>
      </div>
    </div>
  );
}

export default App;
