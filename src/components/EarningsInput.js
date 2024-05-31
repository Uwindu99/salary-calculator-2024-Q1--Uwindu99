
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEarning, removeEarning } from "../store/slices/earningsSlice";
import styled from "styled-components";
import { IoMdClose } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";

const EarningTextField = styled.div`
  padding: 0px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  width: 248px;
  height: 48px;
  gap: 4px;
`;

const AllowanceField = styled.div`
  display: flex;
  margin: 8px 0px;
  height: 48px;
  width: 509px;
  padding: 0px;
`;

const AllowanceLeft = styled.div`
  display: flex;
  gap: 8px;
  margin: 0px;
  padding: 0px;
  height: 48px;
  width: 356px;
`;

const AllowanceTitleInput = styled.input`
  width: 212px;
  height: 48px;
  background-color: #ffffff;
  padding: 12px 15px;
  opacity: 0px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  margin: 0px;
  box-sizing: border-box;
`;

const AllowanceSalaryInput = styled.input`
  width: 136px;
  height: 48px;
  background-color: #ffffff;
  padding: 12px 15px;
  opacity: 0px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  margin: 0px;
  box-sizing: border-box;
`;

const AllowanceRight = styled.div`
  display: flex;
  gap: 8px;
  margin: 8px;
  padding: 0px;
  height: 32px;
  width: 145px;
`;

const IconWrapper = styled.div`
  display: flex;
  height: 32px;
  width: 32px;
  background-color: #efefef;
  border-radius: 50%;
  font-size: 24px;
  align-items: center;
  justify-content: center;
  margin: 0px;
  padding: 0px;
  cursor: pointer;
`;

const SideContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 65px;
  height: 24px;
  padding: 3px;
`;

const CheckboxInput = styled.input`
  width: 18px;
  height: 18px;
  margin: 3px;
`;

const BodyLarge = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  margin: 0px;
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

const BodySmall = styled.p`
  font-family: "Inter", sans-serif;
  color: #757575;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  text-align: right;
  margin: 0px;
  padding: 0px;
`;

const AddButton = styled.button`
  display: flex;
  align-items: flex-start;
  margin-top: 16px;
  padding: 8px 16px;
  background-color: #fafafa;
  color: #0052EA;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 500;
`;

const PlusIcon = styled(FaPlus)`
  margin-right: 8px;
`;

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

