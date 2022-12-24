import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/Driven_white 1.png";

export default function Login() {
  return (
    <ContainerLogin>
      <img src={Logo} alt="Logo Driven" />

      <input type="email" placeholder="E-mail" required />
      <input type="password" placeholder="Senha" required />
      <Link to="/subscriptions">
        <button>ENTRAR</button>
      </Link>
      

      <Link to="/sign-up">
        <p>Não possuí uma conta? Cadastre-se</p>
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
  img {
    margin-bottom: 71px;
  }
`;
