import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDeduction, removeDeduction } from "../store/slices/deductionsSlice";
import { EarningTextField, AllowanceInput } from "./common/TextField";
import { AllowanceField, AllowanceLeft, AllowanceRight } from "./common/AllowanceField";
import IconWrapper from "./common/IconWrapper";
import { BodyLargeSemibold, BodySmall } from "./common/Typography";
import { AddButton, PlusIcon } from "./common/AddButton";
import styled from "styled-components";
import { IoMdClose } from "react-icons/io";

const DeductionArea = styled.div`
  margin: 16px 0px 0px 0px;
  padding: 0px;
  border-top: 1px solid #e0e0e0;
`;

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

  const handleRemoveDeduction = (id) => {
    dispatch(removeDeduction(id));
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
            <AllowanceInput
              type="text"
              placeholder="Deduction Details (Title)"
              value={deductionName}
              onChange={(e) => setDeductionName(e.target.value)}
              width="212px"
            />
            <AllowanceInput
              type="number"
              placeholder="Amount"
              value={deductionValue}
              onChange={(e) => setDeductionValue(Number(e.target.value))}
            />
          </AllowanceLeft>
          <AllowanceRight>
            <IconWrapper onClick={() => handleRemoveDeduction(deduction.id)}>
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
