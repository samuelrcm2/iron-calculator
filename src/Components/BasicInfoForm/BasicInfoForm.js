import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';

export default function BasicInfoForm(props) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Dados Iniciais
      </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
          <FormControl fullWidth>       
          <InputLabel id="age-field-input-label-id">Idade</InputLabel>
          <Select
            fullWidth    
            labelId="age-field-label-id"
            id="age-field-id"
            align="left"
            value={props.age}
            onChange={(ev) => props.setAge(ev.target.value)}
          >
            <MenuItem value={0}></MenuItem>
            <MenuItem value={1}>0 a 6 meses</MenuItem>
            <MenuItem value={2}>6 meses a 1 ano</MenuItem>
            <MenuItem value={3}>1 ano a 2 anos</MenuItem>
            <MenuItem value={4}>2 anos a 4 anos</MenuItem>
            <MenuItem value={5}>4 anos a 6 anos</MenuItem>
          </Select>
        </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
        <FormControl fullWidth>
            <InputLabel id="gender-field-input-label-id">Gênero</InputLabel>
            <Select
              fullWidth    
              labelId="gender-field-label-id"
              id="gender-field-id"
              align="left"
              value={props.gender}
              onChange={(ev)=> props.setGender(ev.target.value)}
            >
              <MenuItem value={0}></MenuItem>
              <MenuItem value={1}>Feminino</MenuItem>
              <MenuItem value={2}>Masculino</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
        <FormControl fullWidth>
        <InputLabel id="height-field-input-label-id">Altura</InputLabel>
          <Input
            id="height-field-label-id"
            value={props.height}
            onChange={(ev)=> props.setHeight(ev.target.value)}
            endAdornment={<InputAdornment position="end">m</InputAdornment>}
            aria-describedby="standard-weight-helper-text"
            inputProps={{
              'aria-label': 'height',
            }}
          />
        </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
        <FormControl fullWidth>
        <InputLabel id="weight-field-input-label-id">Peso</InputLabel>
          <Input
            id="weight-field-id"
            value={props.weight}
            onChange={(ev)=> props.setWeight(ev.target.value)}
            endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
            aria-describedby="standard-weight-helper-text"
            inputProps={{
              'aria-label': 'height',
            }}
          />
        </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}