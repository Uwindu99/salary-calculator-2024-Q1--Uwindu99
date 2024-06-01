import styled from "styled-components";
import { FaPlus } from "react-icons/fa6";



export const EarningTextField = styled.div`
  padding: 0px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  width: 248px;
  height: 48px;
  gap: 4px;
`;

export const AllowanceField = styled.div`
  display: flex;
  margin: 8px 0px;
  height: 48px;
  width: 509px;
  padding: 0px;
`;

export const AllowanceLeft = styled.div`
  display: flex;
  gap: 8px;
  margin: 0px;
  padding: 0px;
  height: 48px;
  width: 356px;
`;

export const AllowanceTitleInput = styled.input`
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

export const AllowanceSalaryInput = styled.input`
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

export const AllowanceRight = styled.div`
  display: flex;
  gap: 8px;
  margin: 8px;
  padding: 0px;
  height: 32px;
  width: 145px;
`;

export const IconWrapper = styled.div`
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

export const SideContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 65px;
  height: 24px;
  padding: 3px;
`;

export const CheckboxInput = styled.input`
  width: 18px;
  height: 18px;
  margin: 3px;
`;

export const BodyLarge = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  margin: 0px;
`;

export const BodyLargeSemibold = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  width: auto;
  letter-spacing: -0.1px;
  text-align: left;
  margin: 0px;
`;

export const BodySmall = styled.p`
  font-family: "Inter", sans-serif;
  color: #757575;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  text-align: right;
  margin: 0px;
  padding: 0px;
`;

export const AddButton = styled.button`
  display: flex;
  align-items: flex-start;
  margin-top: 16px;
  padding: 8px 16px;
  background-color: #fafafa;
  color: #0052ea;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 500;
`;

export const PlusIcon = styled(FaPlus)`
  margin-right: 8px;
`;

export const DeductionArea = styled.div`
  margin: 16px 0px 0px 0px;
  padding: 0px;
  border-top: 1px solid #e0e0e0;
`;

export const BasicSalaryFields = styled.div`
  display: flex;
  flex-direction: column;
  width: 356px;
  height: 80px;
  gap: 8px;
  margin: 24px 0px;
  padding: 0px;
`;

export const SalaryInputField = styled.input`
  width: 356px;
  height: 48px;
  padding: 0px 15px;
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
