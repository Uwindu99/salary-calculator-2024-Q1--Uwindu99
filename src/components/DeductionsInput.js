import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDeduction, removeDeduction } from "../store/slices/deductionsSlice";
import { IoMdClose } from "react-icons/io";

import {
  EarningTextField,
  AllowanceField,
  AllowanceLeft,
  AllowanceTitleInput,
  AllowanceSalaryInput,
  AllowanceRight,
  IconWrapper,
  BodyLarge,
  BodyLargeSemibold,
  BodySmall,
  AddButton,
  PlusIcon,
  DeductionArea
} from "../styles/components";

const DeductionsInput = () => {
  const dispatch = useDispatch();
  const deductions = useSelector((state) => state.deductions.items);
  const [deductionName, setDeductionName] = useState("");
  const [deductionValue, setDeductionValue] = useState(0);

  const handleAddDeduction = () => {
    dispatch(
      addDeduction({
        id: Date.now(),
        name: deductionName,
        value: deductionValue,
      })
    );
    setDeductionName("");
    setDeductionValue(0);
  };

  
  return (
    <DeductionArea>
      <EarningTextField>
        <BodyLargeSemibold>Deductions</BodyLargeSemibold>
        <BodySmall>Salary Advances, Loan Deductions and all</BodySmall>
      </EarningTextField>
      {deductions.map((deduction) => (
        <AllowanceField key={deduction.id}>
          <AllowanceLeft>
            <AllowanceTitleInput
              type="text"
              placeholder="Deduction Details (Title)"
              value={deductionName}
              onChange={(e) => setDeductionName(e.target.value)}
            />
            <AllowanceSalaryInput
              type="number"
              placeholder="Amount"
              value={deductionValue}
              onChange={(e) => setDeductionValue(Number(e.target.value))}
            />
          </AllowanceLeft>
          <AllowanceRight>
            <IconWrapper onClick={() => dispatch(removeDeduction(deduction.id))}>
              <IoMdClose />
            </IconWrapper>
          </AllowanceRight>
        </AllowanceField>
      ))}
      <AddButton onClick={handleAddDeduction}>
        <PlusIcon />
        Add New Deduction
      </AddButton>
   </DeductionArea>
  );
};

export default DeductionsInput;
