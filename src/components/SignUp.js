import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { base_url } from "../constants/urls";

export default function SignUp() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    name: "",
    cpf: "",
    password: "",
  });

  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function cadastrar(event) {
    event.preventDefault();
    {
      axios
        .post(`${base_url}/auth/sign-up`, form)
        .then((res) => {
          console.log(res.data);
          alert("Cadastro efetuado com sucesso! Realize o Login");
          navigate("/");
        })
        .catch((err) => {
          alert(err.response.data.message);
          console.log(err.response);
        });
    }
  }

  return (
    <SignUpForm onSubmit={cadastrar}>
      <input
        type="text"
        placeholder="Nome"
        name="name"
        onChange={handleForm}
        value={form.name}
        required
      />
      <input
        type="text"
        placeholder="CPF"
        name="cpf"
        onChange={handleForm}
        value={form.cpf}
        required
      />
      <input
        type="email"
        placeholder="E-mail"
        name="email"
        onChange={handleForm}
        value={form.email}
        required
      />
      <input
        type="password"
        placeholder="Senha"
        name="password"
        onChange={handleForm}
        value={form.password}
        required
      />
      <button type="submit">CADASTRAR</button>

      <Link to="/">
        <p>Já possuí uma conta? Entre</p>
      </Link>
    </SignUpForm>
  );
}

const SignUpForm = styled.form`
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
`;
