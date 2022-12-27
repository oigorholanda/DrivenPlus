import axios from "axios";
import { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { base_url } from "../constants/urls";
import AuthContext from "../contexts/AuthContext";
import UserContext from "../contexts/UserContext";

export default function Home() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const { token } = useContext(AuthContext);
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const data = localStorage.getItem("user");
  const renderUser = JSON.parse(data);

  function cancelPlan() {
    if (
      window.confirm(`Quer realmente cancelar seu plano, ${renderUser.name}?`)
    ) {
      axios
        .delete(`${base_url}/subscriptions`, config)
        .then(() => {
          alert("Plano cancelado!");
          navigate("/subscriptions");
        })
        .catch(() =>
          alert(
            "Não foi possivel concluir o cancelamento, por favor tente novamente"
          )
        );
    }
  }

  return (
    <ContainerHome>
      <div className="header">
        <Link to="/">
          <img src={renderUser.membership.image} alt="logo" />
        </Link>
        <FaUserCircle color="white" size={40} />
      </div>

      <h2>Olá, {renderUser.name}</h2>

      <div className="options">
        {renderUser.membership.perks.map((perk) => (
          <a href={perk.link} key={perk.id}>
            <button>{perk.title}</button>
          </a>
        ))}
      </div>

      <div className="footer">
        <button onClick={() => navigate("/subscriptions")}>Mudar plano</button>
        <button className="cancel" onClick={() => cancelPlan()}>
          Cancelar plano
        </button>
      </div>
    </ContainerHome>
  );
}

const ContainerHome = styled.div`
  color: white;
  height: 100vh;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img {
    width: 75px;
  }
  .header {
    display: flex;
    justify-content: space-between;
  }
  h2 {
    font-weight: 700;
    font-size: 24px;
    text-align: center;
    margin-top: -80px;
  }
  .cancel {
    background-color: #ff4747;
  }
  .options {
    margin-top: -60px;
  }
`;
