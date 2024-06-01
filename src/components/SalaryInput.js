import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBasicSalary } from "../store/slices/salarySlice";
import {
  BasicSalaryFields,
  BodyLargeSemibold,
  SalaryInputField
} from "../styles/components";

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
    <SalaryInput
      type="number"
      value={basicSalary}
      onChange={handleInputChange}
    />
  </BasicSalaryFields>
  );
};

export default SalaryInput;
