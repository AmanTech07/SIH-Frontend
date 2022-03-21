import React from 'react'
import { Avatar, Button, Grid, Paper, TextField, Typography } from '@material-ui/core'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";

export default function Signup() {

    const paperStyle = {padding:'30px 20px', width:375, margin:"20px auto"}
    const headerStyle={margin:0}
    const avatarStyle={backgroundColor:'black'}
    const colorNeutral={color:'black'}
    const marginTop={marginTop:8}

    const [values, setValues] = React.useState({
        password: "",
        showPassword: false,
    });

    const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
    event.preventDefault();
    };

    const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    };

  return (
    <Grid>

        <Paper elevation={20} style={paperStyle}>

            <Grid align='center'>
                <Avatar style={avatarStyle} />
                <h2 style={headerStyle}>Sign Up</h2>
                <Typography variant='caption'>Please fill this form to create an account!</Typography>
            </Grid>

            <form>
                <TextField fullWidth label="Name" placeholder='Enter your name'/>

                <TextField fullWidth label="Email" placeholder='Enter your email'/>

                <FormControl style={marginTop}>
                    <FormLabel id="demo-radio-buttons-group-label" style={colorNeutral}>Gender</FormLabel>
                    <RadioGroup row aria-labelledby="demo-radio-buttons-group-label" defaultValue="" name="radio-buttons-group">
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>

                <TextField fullWidth label="Phone Number" placeholder='Enter your Contact Number'/>

                <TextField fullWidth label="Password" placeholder='Enter Password'/>

                <Input fullWidth label="Confirm Password" placeholder='Confirm your Password' style={marginTop}
                type={values.showPassword ? "text" : "password"} onChange={handlePasswordChange("password")}
                    value={values.password}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} >
                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    }
                />

                <Button type='submit' variant='contained' color='primary' style={marginTop}>Sign up</Button>
            </form>

        </Paper>

    </Grid>
  )
}
