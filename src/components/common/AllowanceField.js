import styled from "styled-components";

const AllowanceField = styled.div`
  display: flex;
  margin: 8px 0px;
  height: 48px;
  width: 100%;
  max-width: 509px;
  padding: 0px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const AllowanceLeft = styled.div`
  display: flex;
  gap: 8px;
  margin: 0px;
  padding: 0px;
  height: 48px;
  width: 100%;
  max-width: 356px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const AllowanceRight = styled.div`
  display: flex;
  gap: 8px;
  margin: 8px;
  padding: 0px;
  height: 32px;
  width: 100%;
  max-width: 145px;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`;

export { AllowanceField, AllowanceLeft, AllowanceRight };
