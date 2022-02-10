import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
    Button, TextField, Select, MenuItem, InputLabel, FormControl, FormLabel,
    RadioGroup, FormControlLabel, Radio, Checkbox, Grid,
    Box, FormHelperText, Container, Divider, Typography
} from '@mui/material';
import { boxSizing } from '@mui/system';


let ActionForm = () => {
    const {setValue, getValues, register, handleSubmit, formState: { errors } } = useForm();
    const [predicted, setPredicted] = useState(-1);

    let clearAll = () => {
        for (let i = 0; i < document.getElementsByTagName("input").length; i ++){
            document.getElementsByTagName("input")[i].value = null;
            document.getElementsByTagName("input")[i].removeAttribute("checked");
        }
    }
    
    // Handle POST request to the API when form is submitted
    const onSubmit = (user_input) => {
        console.log(user_input);
        const axios = require('axios');
        const data = {
            "user_input": {
                "Age_geq_60": user_input.Age >= 60,
                "Age_in_25_to_40": user_input.Age >= 25 && user_input.Age < 40,
                "Age_in_40_to_59": user_input.Age >= 40 && user_input.Age < 60,
                "Age_lt_25": user_input.Age < 25,
                "EducationLevel": user_input.EducationLevel,
                "HistoryOfOverduePayments": user_input.HistoryOfOverduePayments,
                "Married": user_input.Married,
                "MaxBillAmountOverLast6Months": user_input.MaxBillAmountOverLast6Months,
                "MaxPaymentAmountOverLast6Months": user_input.MaxPaymentAmountOverLast6Months,
                "MonthsWithHighSpendingOverLast6Months": user_input.MonthsWithHighSpendingOverLast6Months,
                "MonthsWithLowSpendingOverLast6Months": user_input.MonthsWithLowSpendingOverLast6Months,
                "MonthsWithZeroBalanceOverLast6Months": user_input.MonthsWithZeroBalanceOverLast6Months,
                "MostRecentBillAmount": user_input.MostRecentBillAmount,
                "MostRecentPaymentAmount": user_input.MostRecentPaymentAmount,
                "Single": !user_input.Married,
                "TotalMonthsOverdue": user_input.TotalMonthsOverdue,
                "TotalOverdueCounts": user_input.TotalOverdueCounts,
                "Actionable_bool": user_input.Actionable_bool.map(x => (x > 0) * 1)
            }
        }
        console.log(data)
        axios.post("https://recourse-api.herokuapp.com/predict", data)
            .then(res => res.data)
            .then((result) => {
                setPredicted(result.predicted);
                // If credit denied, show a list of actions to revert the decision
                if (!result.predicted) {
                    const warning_text = "<p>Here are the things you can do to get accepted.</p>";
                    document.getElementById('button_result_table').innerHTML = warning_text + result.recourse_actions;
                } else {
                    document.getElementById('button_result_table').innerHTML = "";
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    };


    useEffect(() => { }, [])

    const tableFieldStyle = { mx: 1, my: 0, height: 70 };

    setValue("Actionable_bool", [-1, -1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);

    return (
        <div>
            <Container>
                <center>
                <Box sx={{ my: 3, mx: 2 }}>
                    <Typography variant="h4">Credit Approval Prediction</Typography><br />
                    <Typography variant="body1">
                        Fill in the form below to see if you will be denied for credit or not. If you are denied,
                        a list of actions that are required to get accepted will be shown below.
                    </Typography>
                </Box></center>
                <Divider variant="middle" />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style) & .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                    >
                        <br />
                    </Box>

                    <Grid container spacing={5}>
                        {/* <Grid item xs="auto"> */}
                        {/* Question Column */}
                        <Grid item xs={4}>
                            <Box sx={tableFieldStyle}>
                                1. What is your age?</Box>
                            <Box sx={tableFieldStyle}>
                                2. What is your marital status?</Box>
                            <Box sx={tableFieldStyle}>
                                3. What is your highest education Level:</Box>
                            <Box sx={tableFieldStyle}>
                                4. Do you have any history of over due payments?</Box>
                            <Box sx={tableFieldStyle}>
                                5. What is your maximum bill amount over the last 6 months?</Box>
                            <Box sx={tableFieldStyle}>
                                6. What is your maximum payment amount over the last 6 months?</Box>
                            <Box sx={tableFieldStyle}>
                                7. How many months did you have high spending over the last 6 months?</Box>
                            <Box sx={tableFieldStyle}>
                                8. How many months did you have low spending over the last 6 months?</Box>
                            <Box sx={tableFieldStyle}>
                                9. How many months did you have no money in your bank account over the last 6 months?</Box>
                            <Box sx={tableFieldStyle}>
                                10. What was your most recent bill amount?</Box>
                            <Box sx={tableFieldStyle}>
                                11. What was your most recent payment amount?</Box>
                            <Box sx={tableFieldStyle}>
                                12. How many months did you have over dues at most?</Box>
                            <Box sx={tableFieldStyle}>
                                13. How many times did you have over due?</Box>

                        </Grid>
                        <Grid item xs={6}>

                            {/* Answer Column */}

                            {/* 1. Age */}
                            <Box sx={tableFieldStyle}><FormControl >
                                <TextField variant="outlined" type="number" label="Age" defaultValue={21}
                                    {...register("Age", { required: true, max: 100, min: 0 })} />

                            </FormControl></Box>

                            {/* 2. Marital */}
                            <Box sx={tableFieldStyle}><FormControl >
                                <FormLabel id="marriage-radio-button"></FormLabel>
                                <RadioGroup aria-labelledby="marriage-radio-button" defaultValue="1" row>
                                    <FormControlLabel value="1" {...register("Married")} control={<Radio />} label="Single" />
                                    <FormControlLabel value="0" {...register("Married")} control={<Radio />} label="Married" />

                                </RadioGroup>
                            </FormControl></Box>

                            {/* 3. education */}
                            <Box sx={tableFieldStyle}><FormControl >
                                <FormLabel id="education-radio-button"></FormLabel>
                                <RadioGroup aria-labelledby="education-radio-button" defaultValue="3" row>
                                    <FormControlLabel value="3" {...register("EducationLevel")} control={<Radio />} label="high school" />
                                    <FormControlLabel value="2" {...register("EducationLevel")} control={<Radio />} label="university" />
                                    <FormControlLabel value="1" {...register("EducationLevel")} control={<Radio />} label="graduate school" />
                                    <FormControlLabel value="0" {...register("EducationLevel")} control={<Radio />} label="others" />

                                </RadioGroup>
                            </FormControl></Box>

                            {/* 4. History over due */}
                            <Box sx={tableFieldStyle}> <FormControl>
                                <FormLabel id="historyoverdue-radio-button">
                                </FormLabel>
                                <RadioGroup aria-labelledby="historyoverdue-radio-button" defaultValue="1" row>
                                    <FormControlLabel value="1" {...register("HistoryOfOverduePayments")} control={<Radio />} label="Yes" />
                                    <FormControlLabel value="0" {...register("HistoryOfOverduePayments")} control={<Radio />} label="No" />

                                </RadioGroup>
                            </FormControl></Box>

                            {/* 5. max bill amount */}
                            <Box sx={tableFieldStyle}> <FormControl>
                                {/* <p>What is your maximum bill amount over the last 6 months?</p> */}
                                <TextField variant="outlined" type="number" defaultValue={2500} {...register("MaxBillAmountOverLast6Months", { required: true, min: 0 })} />
                            </FormControl></Box>

                            {/* 6. max pay amount */}
                            <Box sx={tableFieldStyle}> <FormControl>
                                <TextField variant="outlined" type="number" defaultValue={2500} {...register("MaxPaymentAmountOverLast6Months", { required: true, min: 0 })} />
                            </FormControl></Box>

                            {/* 7 MonthsWithLowSpendingOverLast6Months*/}
                            <Box sx={tableFieldStyle}> <FormControl>
                                <FormLabel id="q7MonthsWithHighSpendingOverLast6Months">
                                </FormLabel>
                                <RadioGroup aria-labelledby="q7MonthsWithHighSpendingOverLast6Months" defaultValue="6" row>
                                    <FormControlLabel value="0" {...register("MonthsWithHighSpendingOverLast6Months")} control={<Radio />} label="0" />
                                    <FormControlLabel value="1" {...register("MonthsWithHighSpendingOverLast6Months")} control={<Radio />} label="1" />
                                    <FormControlLabel value="2" {...register("MonthsWithHighSpendingOverLast6Months")} control={<Radio />} label="2" />
                                    <FormControlLabel value="3" {...register("MonthsWithHighSpendingOverLast6Months")} control={<Radio />} label="3" />
                                    <FormControlLabel value="4" {...register("MonthsWithHighSpendingOverLast6Months")} control={<Radio />} label="4" />
                                    <FormControlLabel value="5" {...register("MonthsWithHighSpendingOverLast6Months")} control={<Radio />} label="5" />
                                    <FormControlLabel value="6" {...register("MonthsWithHighSpendingOverLast6Months")} control={<Radio />} label="6" />
                                </RadioGroup>
                            </FormControl></Box>

                            {/* 8 MonthsWithLowSpendingOverLast6Months*/}
                            <Box sx={tableFieldStyle}> <FormControl>
                                <FormLabel id="q8MonthsWithLowSpendingOverLast6Months">
                                </FormLabel>
                                <RadioGroup aria-labelledby="q8MonthsWithLowSpendingOverLast6Months" defaultValue="0" row>
                                    <FormControlLabel value="0" {...register("MonthsWithLowSpendingOverLast6Months")} control={<Radio />} label="0" />
                                    <FormControlLabel value="1" {...register("MonthsWithLowSpendingOverLast6Months")} control={<Radio />} label="1" />
                                    <FormControlLabel value="2" {...register("MonthsWithLowSpendingOverLast6Months")} control={<Radio />} label="2" />
                                    <FormControlLabel value="3" {...register("MonthsWithLowSpendingOverLast6Months")} control={<Radio />} label="3" />
                                    <FormControlLabel value="4" {...register("MonthsWithLowSpendingOverLast6Months")} control={<Radio />} label="4" />
                                    <FormControlLabel value="5" {...register("MonthsWithLowSpendingOverLast6Months")} control={<Radio />} label="5" />
                                    <FormControlLabel value="6" {...register("MonthsWithLowSpendingOverLast6Months")} control={<Radio />} label="6" />
                                </RadioGroup>
                            </FormControl></Box>

                            {/* 9 MonthsWithZeroBalanceOverLast6Months*/}
                            <Box sx={tableFieldStyle}> <FormControl>
                                <FormLabel id="q9MonthsWithZeroBalanceOverLast6Months">
                                </FormLabel>
                                <RadioGroup aria-labelledby="q9MonthsWithZeroBalanceOverLast6Months" defaultValue="0" row>
                                    <FormControlLabel value="0" {...register("MonthsWithZeroBalanceOverLast6Months")} control={<Radio />} label="0" />
                                    <FormControlLabel value="1" {...register("MonthsWithZeroBalanceOverLast6Months")} control={<Radio />} label="1" />
                                    <FormControlLabel value="2" {...register("MonthsWithZeroBalanceOverLast6Months")} control={<Radio />} label="2" />
                                    <FormControlLabel value="3" {...register("MonthsWithZeroBalanceOverLast6Months")} control={<Radio />} label="3" />
                                    <FormControlLabel value="4" {...register("MonthsWithZeroBalanceOverLast6Months")} control={<Radio />} label="4" />
                                    <FormControlLabel value="5" {...register("MonthsWithZeroBalanceOverLast6Months")} control={<Radio />} label="5" />
                                    <FormControlLabel value="6" {...register("MonthsWithZeroBalanceOverLast6Months")} control={<Radio />} label="6" />
                                </RadioGroup>
                            </FormControl></Box>

                            {/* 10. MostRecentBillAmount*/}
                            <Box sx={tableFieldStyle}> <FormControl>
                                <TextField variant="outlined" type="number" defaultValue={1000} {...register("MostRecentBillAmount", { required: true, min: 0 })} />
                            </FormControl></Box>

                            {/* 11. MostRecentPaymentAmount*/}
                            <Box sx={tableFieldStyle}> <FormControl>
                                <TextField variant="outlined" type="number" defaultValue={1000} {...register("MostRecentPaymentAmount", { required: true, min: 0 })} />
                            </FormControl></Box>

                            {/* 12. TotalMonthsOverdue*/}
                            <Box sx={tableFieldStyle}> <FormControl>
                                <FormLabel id="q12TotalMonthsOverdue">
                                </FormLabel>
                                <RadioGroup aria-labelledby="q12TotalMonthsOverdue" defaultValue="0" row>
                                    <FormControlLabel value="0" {...register("TotalMonthsOverdue")} control={<Radio />} label="0" />
                                    <FormControlLabel value="1" {...register("TotalMonthsOverdue")} control={<Radio />} label="1" />
                                    <FormControlLabel value="2" {...register("TotalMonthsOverdue")} control={<Radio />} label="2" />
                                    <FormControlLabel value="3" {...register("TotalMonthsOverdue")} control={<Radio />} label="3" />
                                    <FormControlLabel value="4" {...register("TotalMonthsOverdue")} control={<Radio />} label="4" />
                                    <FormControlLabel value="5" {...register("TotalMonthsOverdue")} control={<Radio />} label="5" />
                                    <FormControlLabel value="6" {...register("TotalMonthsOverdue")} control={<Radio />} label="6" />
                                </RadioGroup>
                            </FormControl></Box>

                            {/* 13. TotalOverdueCounts*/}
                            <Box sx={tableFieldStyle}> <FormControl>
                                <FormLabel id="q13TotalOverdueCounts">
                                </FormLabel>
                                <RadioGroup aria-labelledby="q13TotalOverdueCounts" defaultValue="6" row>
                                    <FormControlLabel value="0" {...register("TotalOverdueCounts")} control={<Radio />} label="0" />
                                    <FormControlLabel value="1" {...register("TotalOverdueCounts")} control={<Radio />} label="1" />
                                    <FormControlLabel value="2" {...register("TotalOverdueCounts")} control={<Radio />} label="2" />
                                    <FormControlLabel value="3" {...register("TotalOverdueCounts")} control={<Radio />} label="3" />
                                    <FormControlLabel value="4" {...register("TotalOverdueCounts")} control={<Radio />} label="4" />
                                    <FormControlLabel value="5" {...register("TotalOverdueCounts")} control={<Radio />} label="5" />
                                    <FormControlLabel value="6" {...register("TotalOverdueCounts")} control={<Radio />} label="6" />
                                </RadioGroup>
                            </FormControl></Box>


                            {/* 3. Actionable Column */}
                        </Grid>
                        <Grid item xs>
                            <Box sx={tableFieldStyle}>
                                <FormControlLabel control={<Checkbox onClick={()=>{setValue("Actionable_bool.0", 
                                (-1) * getValues("Actionable_bool.0"))}} size="small" />} label="Actionable" /></Box>
                            <Box sx={tableFieldStyle}>
                                <FormControlLabel control={<Checkbox onClick={()=>{setValue("Actionable_bool.1", 
                                (-1) * getValues("Actionable_bool.1"))}} size="small" />} label="Actionable" /></Box>
                            <Box sx={tableFieldStyle}>
                                <FormControlLabel control={<Checkbox onClick={()=>{setValue("Actionable_bool.2", 
                                (-1) * getValues("Actionable_bool.2"))}} size="small" />} label="Actionable" /></Box>
                            <Box sx={tableFieldStyle}>
                                <FormControlLabel control={<Checkbox onClick={()=>{setValue("Actionable_bool.3", 
                                (-1) * getValues("Actionable_bool.3"))}} size="small" />} label="Actionable" /></Box>
                            <Box sx={tableFieldStyle}>
                                <FormControlLabel control={<Checkbox defaultChecked onClick={()=>{setValue("Actionable_bool.4", 
                                (-1) * getValues("Actionable_bool.4"))}} size="small" />} label="Actionable" /></Box>
                            <Box sx={tableFieldStyle}>
                                <FormControlLabel control={<Checkbox defaultChecked onClick={()=>{setValue("Actionable_bool.5", 
                                (-1) * getValues("Actionable_bool.5"))}} size="small" />} label="Actionable" /></Box>
                            <Box sx={tableFieldStyle}>
                                <FormControlLabel control={<Checkbox defaultChecked onClick={()=>{setValue("Actionable_bool.6", 
                                (-1) * getValues("Actionable_bool.6"))}} size="small" />} label="Actionable" /></Box>
                            <Box sx={tableFieldStyle}>
                                <FormControlLabel control={<Checkbox defaultChecked onClick={()=>{setValue("Actionable_bool.7", 
                                (-1) * getValues("Actionable_bool.7"))}} size="small" />} label="Actionable" /></Box>
                            <Box sx={tableFieldStyle}>
                                <FormControlLabel control={<Checkbox defaultChecked onClick={()=>{setValue("Actionable_bool.8", 
                                (-1) * getValues("Actionable_bool.8"))}} size="small" />} label="Actionable" /></Box>
                            <Box sx={tableFieldStyle}>
                                <FormControlLabel control={<Checkbox defaultChecked onClick={()=>{setValue("Actionable_bool.9", 
                                (-1) * getValues("Actionable_bool.9"))}} size="small" />} label="Actionable" /></Box>
                            <Box sx={tableFieldStyle}>
                                <FormControlLabel control={<Checkbox defaultChecked onClick={()=>{setValue("Actionable_bool.10", 
                                (-1) * getValues("Actionable_bool.10"))}} size="small" />} label="Actionable" /></Box>
                            <Box sx={tableFieldStyle}>
                                <FormControlLabel control={<Checkbox defaultChecked onClick={()=>{setValue("Actionable_bool.11", 
                                (-1) * getValues("Actionable_bool.11"))}} size="small" />} label="Actionable" /></Box>
                            <Box sx={tableFieldStyle}>
                                <FormControlLabel control={<Checkbox defaultChecked onClick={()=>{setValue("Actionable_bool.12", 
                                (-1) * getValues("Actionable_bool.12"))}} size="small" />} label="Actionable" /></Box>
                        </Grid>
                    </Grid>


                    <center>
                    <Button variant="outlined" onClick={()=>{clearAll()}}>Clear All</Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button variant="contained" type="submit">Submit</Button>
                    
                    
                    </center>
                    <br />
                </form>

                <Divider variant="middle" />

                <Typography variant="h4">Credit: {(predicted === -1) ? "" : (predicted) ? "Accepted" : "Denied"}</Typography>
            </Container>
            <Container maxWidth="sm">
                <div id='button_result_table'></div>
            </Container>
        </div>
    );
}

export default ActionForm;