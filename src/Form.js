import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

let ActionForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [predicted, setPredicted] = useState(0);

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
          document.getElementById('button_result_table').innerHTML = result.recourse_actions;
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
          <form onSubmit={handleSubmit(onSubmit)}>

          <p>What is your age?</p>
          <input type="number" placeholder="Age" {...register("Age", {required: true, max: 100, min: 0})} />

          <p>What is your highest level of education?</p>
          <select {...register("EducationLevel", { required: true })}>
            <option value="1">graduate school</option>
            <option value="2">university</option>
            <option value="3">high school</option>
            <option value="0">others</option>
          </select>

          <p>Do you have any history of over due payments?</p>
          <select {...register("HistoryOfOverduePayments", { required: true })}>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>

          <p>Are you married?</p>
          <select {...register("Married", { required: true })}>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>

          <p>What is your maximum bill amount over the last 6 months?</p>
          <input type="number" placeholder="MaxBillAmountOverLast6Months" {...register("MaxBillAmountOverLast6Months", {required: true, min: 0})} />
          
          <p>What is your maximum payment amount over the last 6 months?</p>
          <input type="number" placeholder="MaxPaymentAmountOverLast6Months" {...register("MaxPaymentAmountOverLast6Months", {required: true, min: 0})} />

          <p>How many months did you do high spending over the last 6 months?</p>
          <input type="number" placeholder="MonthsWithHighSpendingOverLast6Months" {...register("MonthsWithHighSpendingOverLast6Months", {required: true, max: 6, min: 0})} />
          
          <p>How many months did you do low spending over the last 6 months?</p>
          <input type="number" placeholder="MonthsWithLowSpendingOverLast6Months" {...register("MonthsWithLowSpendingOverLast6Months", {required: true, max: 6, min: 0})} />

          <p>How many months did you have no money over the last 6 months?</p>
          <input type="number" placeholder="MonthsWithZeroBalanceOverLast6Months" {...register("MonthsWithZeroBalanceOverLast6Months", {required: true, max: 6, min: 0})} />

          <p>What was your most recent bill amount?</p>
          <input type="number" placeholder="MostRecentBillAmount" {...register("MostRecentBillAmount", {required: true, min: 0})} />

          <p>What was your most recent payment amount?</p>
          <input type="number" placeholder="MostRecentPaymentAmount" {...register("MostRecentPaymentAmount", {required: true, min: 0})} />

          <p>How many months did you have over due?</p>
          <input type="number" placeholder="TotalMonthsOverdue" {...register("TotalMonthsOverdue", {required: true, min: 0})} />

          <p>How many times did you have over due?</p>
          <input type="number" placeholder="TotalOverdueCounts" {...register("TotalOverdueCounts", {required: true, min: 0})} />

          <input type="submit" />
          </form>

          <p>Credit: {(predicted) ? "Accepted" : "Denied"}</p>
        </div>
    );
}

export default ActionForm;