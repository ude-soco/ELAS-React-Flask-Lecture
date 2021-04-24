import {Button, Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {grey} from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  containerStyle: {
    marginTop: theme.spacing(18.75),
  },
  counterStyle: {
    margin: "auto",
    padding: theme.spacing(6.25),
    backgroundColor: "#FFC53A",
    width: theme.spacing(51),
    height: theme.spacing(50),
    borderRadius: theme.spacing(1.25),
  },
  textStyle: {
    color: "#444",
    marginBottom: theme.spacing(6),
  },
  gutter: {
    margin: theme.spacing(0, 0.5, 0, 0.5),
  },
  increaseButton: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.success.main,
    "&:hover": {
      backgroundColor: theme.palette.success.dark,
    },
  },
  resetButton: {
    color: theme.palette.common.white,
    backgroundColor: grey[600],
    "&:hover": {
      backgroundColor: grey[700],
    },
  },
}));

export default function Counter(props) {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.containerStyle}>
        <Grid
          container
          direction="column"
          alignItems="center"
          className={classes.counterStyle}
        >
          <Grid item>
            <Typography
              variant="h3"
              className={classes.textStyle}
            >
              {props.name}
            </Typography>
          </Grid>

          <Grid item>
            <Typography
              variant="h1"
              className={classes.textStyle}
            >
              {props.count}
            </Typography>
          </Grid>

          <Grid container justify="center">
            <Grid item>
              <Button
                variant="contained"
                className={classes.increaseButton}
                onClick={props.increase}
              >
                Increase
              </Button>
            </Grid>
            <Grid item className={classes.gutter}>
              <Button
                variant="contained"
                color="secondary"
                onClick={props.decrease}
              >
                Decrease
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                className={classes.resetButton}
                onClick={props.reset}
              >
                Reset
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
