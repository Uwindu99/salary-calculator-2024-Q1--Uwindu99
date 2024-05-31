import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBasicSalary } from "../store/slices/salarySlice";
import styled from "styled-components";

const SalaryInput = () => {
  const dispatch = useDispatch();
  const basicSalary = useSelector((state) => state.salary.basicSalary);

  const handleInputChange = (e) => {
     const value = e.target.value.replace(/\D/g, "");
    dispatch(setBasicSalary(Number(value)));
  };

  const SalaryFields = styled.div`
    display: flex;
    flex-direction: column;
    width: 356px;
    height: 80px;
    gap: 8px;
    margin: 24px 0px;
  `;

  const SalaryText = styled.div`
    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: -0.10000000149011612px;
    text-align: left;
  `;

  const SalaryInput = styled.input`
    width: 356px;
    height: 48px;
    padding:0px 15px 0px 15px;
    
    border-radius: 4px;

    opacity: 0px;
    background-color: white;
    border: 1px solid #e0e0e0;

    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
  `;

const BasicSalaryFields = styled.div`
display: flex;
flex-direction: column;
width: 356px;
height: 80px;
gap: 8px;
margin: 24px 0px;
padding: 0px;
`;

const BodyLargeSemibold = styled.p`
font-family: "Inter", sans-serif;
font-size: 16px;
font-weight: 600;
line-height: 24px;
width: auto;
letter-spacing: -0.10000000149011612px;
text-align: left;
margin: 0px;
`;



  return (
    <BasicSalaryFields>
    <BodyLargeSemibold>Basic Salary</BodyLargeSemibold>
    <SalaryInput
      type="number"
      value={basicSalary}
      onChange={handleInputChange}
    />
  </BasicSalaryFields>
  );
};

export default SalaryInput;
