import styled from "styled-components";

export const EarningTextField = styled.div`
  padding: 0px;
  margin: 16px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 248px;
  height: 48px;
  gap: 4px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const AllowanceInput = styled.input`
  width: ${({ width }) => width || "136px"};
  height: 48px;
  background-color: #ffffff;
  padding: 12px 15px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  margin: 0px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
