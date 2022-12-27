import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { base_url } from "../constants/urls";
import AuthContext from "../contexts/AuthContext";
import Plan from "./Plan";

export default function Subscriptions() {
  const navigate = useNavigate();
  const { token } = useContext(AuthContext);
  const [plans, setPlans] = useState([]);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    if (!token) {
      navigate("/");
      console.log("Deslogado (sub)");
    }
    axios
      .get(`${base_url}/subscriptions/memberships`, config)
      .then((res) => {
        console.log(res.data);
        setPlans(res.data);
      })
      .catch((err) => {
        console.log("Algo deu errado", err.response.data);
      });
  }, []);

  return (
    <PlanContainer>
      <h3>Escolha seu Plano</h3>

      {plans.map((p) => (
        <Link to={`${p.id}`} key={p.id}>
          <Plan key={p.id} image={p.image} price={p.price} />
        </Link>
      ))}
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
