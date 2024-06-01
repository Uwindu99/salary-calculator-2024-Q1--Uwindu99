import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import SalaryInput from "./components/SalaryInput";
import EarningsInput from "./components/EarningsInput";
import DeductionsInput from "./components/DeductionsInput";
import SalaryResult from "./components/SalaryResult";
import styled from "styled-components";

const MainBlock = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 900px;
  padding: 142px 128px;
  display: flex;
  gap: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 16px;
    height: auto;
  }
`;

const LeftBlock = styled.div`
  width: 100%;
  max-width: 680px;
  height: 616px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 24px;
  background-color: #fafafa;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const Heading4 = styled.h4`
  font-family: "Inter", sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 32px;
  text-align: left;
  margin: 0px;
  width: 300px;
`;

const RightBox = styled.div`
  width: 100%;
  max-width: 480px;
  height: 614px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 24px;
  background-color: #FFFFFF;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const App = () => {
  return (
    <Provider store={store}>
      <MainBlock>
        <LeftBlock>
          <Heading4>Calculate Your Salary</Heading4>
          <SalaryInput />
          <EarningsInput />
          <DeductionsInput />
        </LeftBlock>
        <RightBox>
          <Heading4>Your Salary</Heading4>
          <SalaryResult />
        </RightBox>
      </MainBlock>
    </Provider>
  );
};

export default App;
