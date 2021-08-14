import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import BasicInfoForm from '../BasicInfoForm/BasicInfoForm';
import MealsList from '../MealsList/MealsList';
import Report from '../Report/Report';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    backgroundColor: 'grey'
  },
  layout: {
    width: 'auto',
    backgroundColor: 'grey',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2))]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: '0',
    marginBottom: theme.spacing(1),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Dados Iniciais', 'Alimentação', 'Relatório'];

const mealsListMock = [
  {mealId: 1, foodName: 'Sementes de abóbora', foodId: 1, portionValue: 2, portionTypeId: 5},
  {mealId: 2, foodName: 'Pistache', foodId: 2, portionValue: 1, portionTypeId: 4},
  {mealId: 3, foodName: 'Cacau em pó', foodId: 3, portionValue: 7, portionTypeId: 3},
  {mealId: 4, foodName: 'Tofu', foodId: 5, portionValue: 9, portionTypeId: 2},
  {mealId: 5, foodName: 'Feijão preto cozido', foodId: 10, portionValue: 4, portionTypeId: 1}
].sort((a, b) => a.mealId - b.mealId);

const isNumeric = (number) => {
  if (!isNaN(number)) return true;

  const convertedNumber =  number.replace(',','.');
  return !isNaN(convertedNumber);
}

export default function MainPage() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [age, setAge] = React.useState(0);
  const [gender, setGender] = React.useState(0);
  const [height, setHeight] = React.useState(0);
  const [weight, setWeight] = React.useState(0);
  const [mealsList, setMealsList] = React.useState([]);

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <BasicInfoForm 
        age={age}
        setAge={setAge}
        gender={gender}
        setGender={setGender}
        height={height}
        setHeight={setHeight}
        weight ={weight }
        setWeight={setWeight}
        />;
      case 1:
        return <MealsList
        mealsList={mealsList}
        setMealsList={setMealsList}
        />;
      case 2:
        return <Report />;
      default:
        throw new Error('Unknown step');
    }
  }

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const checkNumericField = (number) => {
    if (!isNumeric(number)) return false;

    return isNaN(number) ? Number(number.replace(',','.')) > 0 : number > 0;
  }

  const checkIfBsicFormIsFilled = () => {
    return age > 0 && gender > 0 && checkNumericField(height) && checkNumericField(weight) > 0;
  }

  const checkIfMealsListIsFilled = () => {
    return mealsList.length > 0;
  }

  const isNextButtonDisabled = () => {
    if (activeStep === 0)
      return !checkIfBsicFormIsFilled();

    if (activeStep === 1)
      return !checkIfMealsListIsFilled();
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Calculadora de Consumo de Ferro
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order confirmation, and will
                  send you an update when your order has shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Voltar
                    </Button>
                  )}
                  {activeStep !== steps.length - 1 && ( 
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                    disabled={isNextButtonDisabled()}
                  >
                    Próximo
                  </Button>)}
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
}