import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBasicSalary } from "../store/slices/salarySlice";
import { AllowanceInput } from "./common/TextField"; // Check this import statement
import { BodyLargeSemibold } from "./common/Typography"; // Check this import statement
import styled from "styled-components";

const BasicSalaryFields = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 356px;
  height: 80px;
  gap: 8px;
  margin: 24px 0px;
  padding: 0px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SalaryInput = () => {
  const dispatch = useDispatch();
  const basicSalary = useSelector((state) => state.salary.basicSalary);

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    dispatch(setBasicSalary(Number(value)));
  };

  return (
    <BasicSalaryFields>
      <BodyLargeSemibold>Basic Salary</BodyLargeSemibold>
      <AllowanceInput
        type="number"
        value={basicSalary}
        onChange={handleInputChange}
        width="356px"
      />
    </BasicSalaryFields>
  );
};

export default SalaryInput;
