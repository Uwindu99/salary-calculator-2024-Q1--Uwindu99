import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import SalaryInput from "./components/SalaryInput";
import EarningsInput from "./components/EarningsInput";
import DeductionsInput from "./components/DeductionsInput";
import SalaryResult from "./components/SalaryResult";
import styled from "styled-components";

const MainBlock = styled.div`
  width: 1440px;
  height: 900px;
  padding: 142px 128px;
  opacity: 0px;
`;

const LeftBlock = styled.div`
  width: 680px;
  height: auto;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  opacity: 0px;
  padding: 24px;

  background-color: #fafafa;
`;

const Heading4 = styled.h4`
  font-family: "Inter", sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: -0.02199999988079071px;
  text-align: left;
  margin: 0px;
  width: 209px;
`;

const RightBox = styled.div``;

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
        <div className="right-panel">
          <SalaryResult />
        </div>
      </MainBlock>
    </Provider>
  );
};

export default App;
