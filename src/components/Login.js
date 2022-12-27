import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/Driven_white 1.png";
import { base_url } from "../constants/urls";
import AuthContext from "../contexts/AuthContext";
import UserContext from "../contexts/UserContext";

export default function Login() {
  const navigate = useNavigate();
  const { setToken } = useContext(AuthContext)
  const { setUser } = useContext(UserContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login(event) {
    event.preventDefault()
    {
      axios
        .post(`${base_url}/auth/login`, {email, password})
        .then((res) => {
          console.log(res.data);
          setToken(res.data.token)
          setUser(res.data)
          localStorage.setItem("user", JSON.stringify(res.data));
          if (res.data.membership !== null) {
            navigate("/home")
          } else {
            navigate("/subscriptions")
          }
        })
        .catch((err) => {
          alert(err.response.data.message);
          console.log(err.response);
        });
    }
  }

  return (
    <ContainerLogin onSubmit={login}>
      <img src={Logo} alt="Logo Driven" />

      <input
        type="email"
        placeholder="E-mail"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        required
      />
      <input
        type="password"
        placeholder="Senha"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        required
      />
        <button type="submit">ENTRAR</button>
      

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
    margin-top: 20px;
    color: white;
    text-decoration: underline;
  }
  img {
    margin-bottom: 71px;
  }
`;
