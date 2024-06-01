import styled from "styled-components";
import { FaPlus } from "react-icons/fa6";

const AddButton = styled.button`
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

export { AddButton };
