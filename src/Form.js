import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, TextField, Select, MenuItem, InputLabel, FormControl, 
    Box, FormHelperText, Container, Divider, Typography } from '@mui/material';

let ActionForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [predicted, setPredicted] = useState(-1);

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
              "TotalOverdueCounts": user_input.TotalOverdueCounts
          }
      }

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

    useEffect(() => {}, [])
    
    return (
        <div>
            <Container>
                <Box sx={{ my: 3, mx: 2 }}>
                    <Typography variant="h4">Credit Approval Prediction</Typography>
                    <Typography variant="body1">
                        Fill in the form below to see if you will be denied for credit or not. If you are denied, 
                        a list of actions that are required to get accepted will be shown below.
                    </Typography>
                </Box>
                <Divider variant="middle" />
                `<form onSubmit={handleSubmit(onSubmit)}>
                    <Box
                    component="form"
                    sx={{
                        '& > :not(style) & .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    >
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <TextField variant="outlined" type="number" label="Age" defaultValue={21} {...register("Age", {required: true, max: 100, min: 0})} />
                            <FormHelperText>Required</FormHelperText>
                        </FormControl>

                        <FormControl sx={{ m: 1, minWidth: 200 }}>
                            <InputLabel>Education Level</InputLabel>
                            <Select defaultValue={2} {...register("EducationLevel", { required: true })}>
                            <MenuItem value="1">graduate school</MenuItem>
                            <MenuItem value="2">university</MenuItem>
                            <MenuItem value="3">high school</MenuItem>
                            <MenuItem value="0">others</MenuItem>
                            </Select>
                            <FormHelperText>Required</FormHelperText>
                        </FormControl>

                        <FormControl sx={{ m: 1, minWidth: 200 }}>
                            <InputLabel>Martial Status</InputLabel>
                            <Select defaultValue={0} {...register("Married", { required: true })}>
                            <MenuItem value="1">Married</MenuItem>
                            <MenuItem value="0">Single</MenuItem>
                            </Select>
                            <FormHelperText>Required</FormHelperText>
                        </FormControl>
                    </Box>

                    <FormControl sx={{ m: 1, minWidth: 100, maxWidth: 200}}>
                        <p>Do you have any history of over due payments?</p>
                        <Select defaultValue={0} {...register("HistoryOfOverduePayments", { required: true })}>
                        <MenuItem value="1">Yes</MenuItem>
                        <MenuItem value="0">No</MenuItem>
                        </Select>
                        <FormHelperText>Required</FormHelperText>
                    </FormControl>

                    <FormControl sx={{ m: 1, minWidth: 100, maxWidth: 200 }}>
                        <p>What is your maximum bill amount over the last 6 months?</p>
                        <TextField variant="outlined" type="number" defaultValue={2500} {...register("MaxBillAmountOverLast6Months", {required: true, min: 0})} />
                        <FormHelperText>Required</FormHelperText>
                    </FormControl>

                    <FormControl sx={{ m: 1, minWidth: 100, maxWidth: 200 }}>
                        <p>What is your maximum payment amount over the last 6 months?</p>
                        <TextField variant="outlined" type="number" defaultValue={2500} {...register("MaxPaymentAmountOverLast6Months", {required: true, min: 0})} />
                        <FormHelperText>Required</FormHelperText>
                    </FormControl>
                    
                    <FormControl sx={{ m: 1, minWidth: 100, maxWidth: 200 }}>
                        <p>How many months did you have high spending over the last 6 months?</p>
                        <TextField variant="outlined" type="number" defaultValue={6} {...register("MonthsWithHighSpendingOverLast6Months", {required: true, max: 6, min: 0})} />
                        <FormHelperText>Required</FormHelperText>
                    </FormControl>
                    
                    <FormControl sx={{ m: 1, minWidth: 100, maxWidth: 200 }}>
                        <p>How many months did you have low spending over the last 6 months?</p>
                        <TextField variant="outlined" type="number" defaultValue={0} {...register("MonthsWithLowSpendingOverLast6Months", {required: true, max: 6, min: 0})} />
                        <FormHelperText>Required</FormHelperText>
                    </FormControl>
                    
                    <FormControl sx={{ m: 1, minWidth: 100, maxWidth: 200 }}>
                        <p>How many months did you have no money in your bank account over the last 6 months?</p>
                        <TextField variant="outlined" type="number" defaultValue={0} {...register("MonthsWithZeroBalanceOverLast6Months", {required: true, max: 6, min: 0})} />
                        <FormHelperText>Required</FormHelperText>
                    </FormControl>
                    
                    <FormControl sx={{ m: 1, minWidth: 100, maxWidth: 200 }}>
                        <p>What was your most recent bill amount?</p>
                        <TextField variant="outlined" type="number" defaultValue={1000} {...register("MostRecentBillAmount", {required: true, min: 0})} />
                        <FormHelperText>Required</FormHelperText>
                    </FormControl>
                    
                    <FormControl sx={{ m: 1, minWidth: 100, maxWidth: 200 }}>
                        <p>What was your most recent payment amount?</p>
                        <TextField variant="outlined" type="number" defaultValue={1000} {...register("MostRecentPaymentAmount", {required: true, min: 0})} />
                        <FormHelperText>Required</FormHelperText>
                    </FormControl>
                    
                    <FormControl sx={{ m: 1, minWidth: 100, maxWidth: 200 }}>
                        <p>How many months did you have over dues at most?</p>
                        <TextField variant="outlined" type="number" defaultValue={0} {...register("TotalMonthsOverdue", {required: true, min: 0})} />
                        <FormHelperText>Required</FormHelperText>
                    </FormControl>
                    
                    <FormControl sx={{ m: 1, minWidth: 100, maxWidth: 200 }}>
                        <p>How many times did you have over due?</p>
                        <TextField variant="outlined" type="number" defaultValue={6} {...register("TotalOverdueCounts", {required: true, min: 0})} />
                        <FormHelperText>Required</FormHelperText>
                    </FormControl>
                                
                    <br></br>
                    <br></br>

                    <Button variant="contained" type="submit">Submit</Button>
                </form>`

                <Divider variant="middle" />
                
                <Typography variant="h4">Credit: {(predicted===-1) ? "" : (predicted) ? "Accepted" : "Denied"}</Typography>
                </Container>
                <Container maxWidth="sm">
                    <div id='button_result_table'></div>
                </Container>
        </div>
    );
}

export default ActionForm;