
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEarning, removeEarning } from "../store/slices/earningsSlice";
import styled from "styled-components";
import { IoMdClose } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import {
  EarningTextField,
  AllowanceField,
  AllowanceLeft,
  AllowanceTitleInput,
  AllowanceSalaryInput,
  AllowanceRight,
  IconWrapper,
  SideContainer,
  CheckboxInput,
  BodyLarge,
  BodyLargeSemibold,
  BodySmall,
  AddButton,
  PlusIcon
} from "../styles/components";


const EarningsInput = () => {
  const dispatch = useDispatch();
  const earnings = useSelector((state) => state.earnings.items);
  const [earningName, setEarningName] = useState("");
  const [earningValue, setEarningValue] = useState(0);
  const [allowances, setAllowances] = useState([]);

  const handleAddAllowance = () => {
    setAllowances([
      ...allowances,
      { id: Date.now(), name: "", value: 0, epfApplicable: false },
    ]);
  };

  const handleRemoveAllowance = (id) => {
    setAllowances(allowances.filter((allowance) => allowance.id !== id));
  };

  const handleChangeAllowance = (id, field, value) => {
    setAllowances(
      allowances.map((allowance) =>
        allowance.id === id ? { ...allowance, [field]: value } : allowance
      )
    );
  };

  return (
    <>
      <EarningTextField>
        <BodyLargeSemibold>Earnings</BodyLargeSemibold>
        <BodySmall>Allowance, Fixed Allowance, Bonus and etc.</BodySmall>
      </EarningTextField>
      {allowances.map((allowance) => (
        <AllowanceField key={allowance.id}>
          <AllowanceLeft>
            <AllowanceTitleInput
              type="text"
              placeholder="Pay Details (Title)"
              value={allowance.name}
              onChange={(e) =>
                handleChangeAllowance(allowance.id, "name", e.target.value)
              }
            />
            <AllowanceSalaryInput
              type="number"
              placeholder="Amount"
              value={allowance.value}
              onChange={(e) =>
                handleChangeAllowance(allowance.id, "value", Number(e.target.value))
              }
            />
          </AllowanceLeft>
          <AllowanceRight>
            <IconWrapper onClick={() => handleRemoveAllowance(allowance.id)}>
              <IoMdClose />
            </IconWrapper>
            <SideContainer>
              <CheckboxInput
                type="checkbox"
                checked={allowance.epfApplicable}
                onChange={(e) =>
                  handleChangeAllowance(allowance.id, "epfApplicable", e.target.checked)
                }
              />
              <BodyLarge>EPF/ETF</BodyLarge>
            </SideContainer>
          </AllowanceRight>
        </AllowanceField>
      ))}
      <AddButton onClick={handleAddAllowance}>
        <PlusIcon />
        Add New Allowance
      </AddButton>
    </>
  );
};

export default EarningsInput;

