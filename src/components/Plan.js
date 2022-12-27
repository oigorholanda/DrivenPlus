import styled from "styled-components";

export default function Plan({ image, price }) {

  return (
      <PlanDiv>
        <img src={image} alt="Logo plano {ID}" />
        <p>R$ {price.replace(".", ",")}</p>
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
