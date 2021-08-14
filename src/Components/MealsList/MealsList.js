import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
const columns = [
  { id: 'name', label: 'Nome', minWidth: 170 },
  { id: 'portion', label: 'Porção', minWidth: 100 },
  {
    id: 'portionKind',
    label: 'Tipo de Medida',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'remove',
    label: 'Remover',
    minWidth: 170,
    align: 'right', 
    format: (value) => value.toLocaleString('en-US'),
  },
];


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: "300px",
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

export default function MealsList(props) {
  const classes = useStyles();

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 100000000);
  };

  const createNewMeal = () => {
    return {mealId: generateRandomNumber(), foodName: '', foodId: 0, portionValue: 0, portionTypeId: 0};
  }

  const removeMeal = (mealId) => {
    props.setMealsList([ ...props.mealsList.filter(f => f.mealId !== mealId)]);
  }

  const addMeal = () => {
    props.setMealsList([ ...props.mealsList, createNewMeal()]);
  }

  const setParam = (paramName, paramValue, mealId) => {
    let meal = props.mealsList.find(f => f.mealId === mealId);
    meal[paramName] = paramValue;
    const newMealsList = [ ...props.mealsList.filter(f => f.mealId !== mealId), meal].sort((a, b) => a.mealId - b.mealId);
    props.setMealsList(newMealsList);
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
      Alimentação
      </Typography>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.mealsList.map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.mealId}>
                      <TableCell align='center'>
                      <FormControl fullWidth>       
                        <Select
                          fullWidth    
                          labelId={`meal-select-label-${row.mealId}`}
                          id={`meal-select-${row.mealId}`}
                          value={row.foodId}
                          onChange={(ev) => setParam('foodId', ev.target.value, row.mealId)}
                        >
                          <MenuItem value={0}></MenuItem>
                          <MenuItem value={1}>Sementes de abóbora</MenuItem>
                          <MenuItem value={2}>Pistache</MenuItem>
                          <MenuItem value={3}>Cacau em pó</MenuItem>
                          <MenuItem value={4}>Damasco seco</MenuItem>
                          <MenuItem value={5}>Tofu</MenuItem>
                          <MenuItem value={6}>Uva passa</MenuItem>
                          <MenuItem value={7}>Coco seco</MenuItem>
                          <MenuItem value={8}>Noz</MenuItem>
                          <MenuItem value={9}>Feijão branco cozido </MenuItem>
                          <MenuItem value={10}>Feijão preto cozido</MenuItem>
                        </Select>
                      </FormControl>
                      </TableCell>
                      <TableCell align='center'>
                        <FormControl fullWidth>
                            <Input
                              id={`portion-input-${row.mealId}`}
                              value={row.portionValue}
                              onChange={(ev) => setParam('portionValue', ev.target.value, row.mealId)}
                              aria-describedby="standard-weight-helper-text"
                              inputProps={{
                                'aria-label': 'height',
                              }}
                            />
                        </FormControl>
                      </TableCell>
                      <TableCell align='center'>
                      <FormControl fullWidth>       
                        <Select
                          fullWidth    
                          labelId={`portiontype-select-label-${row.mealId}`}
                          id={`portiontype-select-${row.mealId}`}
                          value={row.portionTypeId}
                          onChange={(ev) => setParam('portionTypeId', ev.target.value, row.mealId)}
                          >
                          <MenuItem value={0}></MenuItem>
                          <MenuItem value={1}>Colher de sopa</MenuItem>
                          <MenuItem value={2}>Colher de café</MenuItem>
                          <MenuItem value={3}>Colher de sobremesa</MenuItem>
                          <MenuItem value={4}>Xícara de chá</MenuItem>
                          <MenuItem value={5}>Gramas</MenuItem>
                        </Select>
                      </FormControl>
                      </TableCell>
                  <TableCell align='right'>
                   <DeleteOutlineIcon color="primary" onClick={() => removeMeal(row.mealId)}
                        />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <div className={classes.buttons}>
                    <Button variant="contained"
                    color="primary" className={classes.button}
                    onClick={() => {addMeal()}}>
                      Adicionar Alimento
                    </Button>
                </div>
    </React.Fragment>
  );
}