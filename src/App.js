import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import SalaryInput from "./components/SalaryInput";
import EarningsInput from "./components/EarningsInput";
import DeductionsInput from "./components/DeductionsInput";
import SalaryResult from "./components/SalaryResult";
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/theme";
import { ThemeProvider } from "styled-components";


const MainBlock = styled.div`
  width: 100%;
  max-width: 1440px;
  height: auto;
  padding: 142px 128px;
  margin: 0 auto;
  opacity: 0px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 768px) {
    padding: 70px 60px;
  }
  @media (max-width: 480px) {
    padding: 20px 15px;
  }
`;

const LeftBlock = styled.div`
  width: 100%;
  max-width: 680px;
  height: auto;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 8px;
  opacity: 0px;
  padding: 24px;
  background-color: ${props => props.theme.colors.background};

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Heading4 = styled.h4`
  font-family: "Inter", sans-serif;
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: 32px;
  letter-spacing: -0.022px;
  text-align: left;
  margin: 0px;
  width: 209px;
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
        <div className="right-panel">
          <SalaryResult />
        </div>
      </MainBlock>
    </Provider>
  );
};

export default App;
