import React from 'react';
import { useSelector } from 'react-redux';

const SalaryResult = () => {
  const basicSalary = useSelector(state => state.salary.basicSalary);
  const earnings = useSelector(state => state.earnings.items);
  const deductions = useSelector(state => state.deductions.items);

  const totalEarnings = basicSalary + earnings.reduce((acc, earning) => acc + earning.value, 0);
  const totalDeductions = deductions.reduce((acc, deduction) => acc + deduction.value, 0);
  const netSalary = totalEarnings - totalDeductions;

  // Placeholder calculations for EPF, ETF, and APIT
  const epfEmployee = (totalEarnings * 0.08).toFixed(2);
  const epfEmployer = (totalEarnings * 0.12).toFixed(2);
  const etfEmployer = (totalEarnings * 0.03).toFixed(2);
  const apit = ((totalEarnings * 0.18) - 25500).toFixed(2);

  return (
    <div>
      <h2>Your Salary</h2>
      <ul>
        <li>Basic Salary: {basicSalary}</li>
        <li>Gross Earnings: {totalEarnings}</li>
        <li>Gross Deductions: {totalDeductions}</li>
        <li>Employee EPF (8%): {epfEmployee}</li>
        <li>APIT: {apit}</li>
        <li>Net Salary (Take Home): {netSalary}</li>
      </ul>
      <h3>Contribution from the Employer</h3>
      <ul>
        <li>Employer EPF (12%): {epfEmployer}</li>
        <li>Employer ETF (3%): {etfEmployer}</li>
        <li>CTC (Cost to Company): {totalEarnings + parseFloat(epfEmployer) + parseFloat(etfEmployer)}</li>
      </ul>
    </div>
  );
};

export default SalaryResult;