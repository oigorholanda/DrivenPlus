import { Link } from "react-router-dom";
import styled from "styled-components";

export default function SignUp() {
  return (
    <ContainerLogin>
      <input type="text" placeholder="Nome" required />
      <input type="number" placeholder="CPF" required />
      <input type="email" placeholder="E-mail" required />
      <input type="password" placeholder="Senha" required />
      <button>CADASTRAR</button>

      <Link to="/">
        <p>Já possuí uma conta? Entre</p>
      </Link>
    </ContainerLogin>
  );
}

const ContainerLogin = styled.form`
  width: 300px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 135px;
  margin: 0 auto;
  gap: 17px;
  h1 {
    color: white;
  }
  p {
    margin-top: 25px;
    color: white;
    text-decoration: underline;
  }
`;
