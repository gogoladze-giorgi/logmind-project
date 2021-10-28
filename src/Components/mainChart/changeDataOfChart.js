import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import DataChart from "./Charts";
import classes from './ChangeDataOfChart.module.css'

const optionsX = ['timeStamp', 'count'];
const optionsY = ['count','timeStamp']

const ChangeDate = ()=>  {
    const [valueY, setYValue] = React.useState(optionsY[0]);
    const [valueX, setXValue] = React.useState(optionsX[0]);
    const[checkBox, setCheckBox] = React.useState(true)

    const [inputXValue, setInputXValue] = React.useState('')
    const [inputYValue, setInputYValue] = React.useState('');


    function valuetext(value) {
        console.log( value);
    }


    return (
        <div >
            <div className={classes.flex}>

                <Autocomplete className={classes.Autocomplete}
                              value={valueX}
                              onChange={(event, newValue) => {
                                  setXValue(newValue);
                              }}
                              inputValue={inputXValue}
                              onInputChange={(event, newInputValue) => {
                                  setInputXValue(newInputValue);
                              }}
                              id="controllable-states-demo"
                              options={optionsX}
                              sx={{ width: 300 }}
                              renderInput={(params) => <TextField {...params} label="X serries" />}
                />
                <Autocomplete
                    value={valueY}
                    onChange={(event, newValue) => {
                        setYValue(newValue);
                    }}
                    inputValue={inputYValue}
                    onInputChange={(event, newInputValue) => {
                        setInputYValue(newInputValue);
                    }}
                    id="controllable-states-demo"
                    options={optionsY}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Y serries" />}
                />
                <br />
                <div style={{padding:'12px'}}>Line weight</div>
                <Box sx={{ width: 300 }}>
                    <Slider
                        aria-label="sizes"
                        defaultValue={30}
                        getAriaValueText={valuetext}
                        color="secondary"
                    />
                </Box>
                <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Label" onChange={(event)=>  setCheckBox(event.target.checked)}/>
                </FormGroup>
            </div>
            <DataChart  Yaxsis={inputYValue}  Xaxsis={inputXValue}  Checkbox={checkBox}/>
        </div>
    );
}
export default ChangeDate;
