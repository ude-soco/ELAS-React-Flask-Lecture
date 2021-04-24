import {useState} from "react";
import {Grid, Typography} from "@material-ui/core";

function App() {
  const [count, setCount] = useState(7);
  const [name, setName] = useState("Counter App")

  console.log(count);
  console.log(name);

  return (
    <Grid container direction="column" alignItems="center">

      <Typography variant="h3">{name}</Typography>
      <Typography variant="h1">{count}</Typography>
      
    </Grid>
  );
}

export default App;
