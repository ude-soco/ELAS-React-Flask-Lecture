import {useState} from "react";
import {Button, Grid, Typography} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  containerStyle: {
    marginTop: theme.spacing(18.75),
  },
  counterStyle: {
    margin: "auto",
    padding: theme.spacing(6.25),
    backgroundColor: "#FFC53A",
    width: theme.spacing(50),
    height: theme.spacing(50),
    borderRadius: theme.spacing(1.25),
  },
  textStyle: {
    color: "#444",
    marginBottom: theme.spacing(6),
  },
  gutter: {
    margin: theme.spacing(0, 0.5, 0, 0.5)
  }
}))

export default function App() {
  const [count, setCount] = useState(7);
  const [name, setName] = useState("Counter App");
  const classes = useStyles();

  const handleChange = () => {
    setCount(count + 1);
  }

  return (
    <>
      <Grid container className={classes.containerStyle}>
        <Grid container direction="column" alignItems="center" className={classes.counterStyle}>

          <Grid item>
            <Typography variant="h3" className={classes.textStyle}>
              {name}
            </Typography>
          </Grid>

          <Grid item>
            <Typography variant="h1" className={classes.textStyle}>
              {count}
            </Typography>
          </Grid>

          <Grid container justify="center">
            <Grid item>
              <Button variant="contained" color="primary" onClick={handleChange}>
                Update
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
