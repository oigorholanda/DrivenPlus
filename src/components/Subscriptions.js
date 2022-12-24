import { Link } from "react-router-dom";
import styled from "styled-components";

import Plan from "./Plan";

export default function Subscriptions() {
  return (
    <PlanContainer>
      <h3>Escolha seu Plano</h3>
      <Link to="/subscriptions/1">
      <Plan />
      <Plan />
      <Plan />
      </Link>

    </PlanContainer>
  );
}

const PlanContainer = styled.div`
  width: 280px;
  color: white;
  margin: auto;
  padding-top: 30px;
  h3 {
    font-size: 32px;
    margin-bottom: 30px;
    text-align: center;
  }
  p {
    font-size: 24px;
    font-weight: 700;
  }
`;
