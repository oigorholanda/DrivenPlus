import styled from "styled-components";
import logo from "../assets/Group 1.png";

export default function Plan() {
  return (
    
      <PlanDiv>
        <img src={logo} alt="Logo plano {ID}" />
        <p>R$ 39,99</p>
      </PlanDiv>
    
  );
}

const PlanDiv = styled.div`
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: 3px solid #7e7e7e;
  border-radius: 12px;
  margin-bottom: 20px;
`;
