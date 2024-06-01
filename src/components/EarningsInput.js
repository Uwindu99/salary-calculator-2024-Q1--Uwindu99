import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEarning, removeEarning } from "../store/slices/earningsSlice";
import { EarningTextField, AllowanceInput } from "./common/TextField";
import { AllowanceField, AllowanceLeft, AllowanceRight } from "./common/AllowanceField";
import IconWrapper from "./common/IconWrapper";
import CheckboxInput from "./common/CheckboxInput";
import { BodyLargeSemibold, BodySmall, BodyLarge } from "./common/Typography";
import { AddButton, PlusIcon } from "./common/AddButton";
import { IoMdClose } from "react-icons/io";

const EarningsInput = () => {
  const dispatch = useDispatch();
  const earnings = useSelector((state) => state.earnings.items);
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
            <AllowanceInput
              type="text"
              placeholder="Pay Details (Title)"
              value={allowance.name}
              onChange={(e) =>
                handleChangeAllowance(allowance.id, "name", e.target.value)
              }
              width="212px"
            />
            <AllowanceInput
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
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <CheckboxInput
                type="checkbox"
                checked={allowance.epfApplicable}
                onChange={(e) =>
                  handleChangeAllowance(allowance.id, "epfApplicable", e.target.checked)
                }
              />
              <BodyLarge>EPF/ETF</BodyLarge>
            </div>
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
