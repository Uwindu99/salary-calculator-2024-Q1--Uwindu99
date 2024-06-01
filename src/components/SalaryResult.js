import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const ResultContainer = styled.div`
  h2, h3 {
    font-family: "Inter", sans-serif;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    font-family: "Inter", sans-serif;
    font-size: 16px;
    margin-bottom: 8px;
  }
`;

const SalaryResult = () => {
  const basicSalary = useSelector(state => state.salary.basicSalary);
  const earnings = useSelector(state => state.earnings.items);
  const deductions = useSelector(state => state.deductions.items);

  const totalEarnings = basicSalary + earnings.reduce((acc, earning) => acc + earning.value, 0);
  const totalDeductions = deductions.reduce((acc, deduction) => acc + deduction.value, 0);
  const netSalary = totalEarnings - totalDeductions;

  const epfEmployee = (totalEarnings * 0.08).toFixed(2);
  const epfEmployer = (totalEarnings * 0.12).toFixed(2);
  const etfEmployer = (totalEarnings * 0.03).toFixed(2);
  const apit = ((totalEarnings * 0.18) - 25500).toFixed(2);

  return (
    <ResultContainer>
      
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
    </ResultContainer>
  );
};

export default SalaryResult;
