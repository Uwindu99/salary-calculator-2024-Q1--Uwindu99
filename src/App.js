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
<<<<<<< HEAD
  height: 900px;
  padding: 142px 128px;
  display: flex;
  gap: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 16px;
    height: auto;
=======
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
>>>>>>> c8acf18405246cb270e3b923faa4ba8391cdf422
  }
`;

const LeftBlock = styled.div`
  width: 100%;
  max-width: 680px;
<<<<<<< HEAD
  height: 616px;
  border: 1px solid #e0e0e0;
=======
  height: auto;
  border: 1px solid ${props => props.theme.colors.border};
>>>>>>> c8acf18405246cb270e3b923faa4ba8391cdf422
  border-radius: 8px;
  padding: 24px;
<<<<<<< HEAD
  background-color: #fafafa;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
=======
  background-color: ${props => props.theme.colors.background};

  @media (max-width: 768px) {
    width: 100%;
>>>>>>> c8acf18405246cb270e3b923faa4ba8391cdf422
  }
`;

const Heading4 = styled.h4`
  font-family: "Inter", sans-serif;
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: 32px;
<<<<<<< HEAD
=======
  letter-spacing: -0.022px;
>>>>>>> c8acf18405246cb270e3b923faa4ba8391cdf422
  text-align: left;
  margin: 0px;
  width: 300px;
`;
<<<<<<< HEAD

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

=======
>>>>>>> c8acf18405246cb270e3b923faa4ba8391cdf422
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
