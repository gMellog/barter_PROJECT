import React, {useState} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { useSelector } from "react-redux";
import styles from "./ProductCarousel.module.css"

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1200,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    marginTop: 60,
    height: 255,
    maxWidth: 400,
    overflow: 'hidden',
    display: 'block',
    width: '100%',
  },
 
}));

export default function TextMobileStepper() {
  const stuffArray = useSelector((state) => state.stuffArray);

  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = stuffArray.length;
  const countOfShownProduct = 3
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + countOfShownProduct > maxSteps - 1 ? 0 : prevActiveStep + countOfShownProduct);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - countOfShownProduct < 0 ? maxSteps - 1 : prevActiveStep - countOfShownProduct);
  };

  return (
    <div className={classes.root}>
      <div className={styles.wrapper}>{stuffArray.slice(activeStep, activeStep+countOfShownProduct).map(stuff => {
      return (
        <>
      
      <Paper square elevation={0} className={classes.header}>
        <Typography>{stuff.name}</Typography>
      </Paper>
      <img
        className={classes.img}
        src={stuff.photoUrl}
        alt={stuff.name}
      /> 
      </>
      )
    })}
    </div>
      
      <MobileStepper
        steps={Math.floor(maxSteps/countOfShownProduct)+1}
        position="static"
        variant="text"
        activeStep={Math.floor(activeStep/countOfShownProduct)+1}
        nextButton={
          <Button size="small" onClick={handleNext}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </div>
  );
}
