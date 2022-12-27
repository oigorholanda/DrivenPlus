import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo3 from "../assets/Group 3.png";

export default function Home() {
    const navigate = useNavigate()

  return (
    <ContainerHome>
      <div className="header">
        <img src={Logo3} alt="logo" />
        <FaUserCircle color="white" size={40} />
      </div>

      <h2>Olá, Fulano</h2>

      <div className="options">
        <button>Solicitar brindes</button>
        <button>Materiais bônus de web</button>
        <button>Aulas bônus de tech</button>
        <button>Mentorias personalizadas</button>
      </div>

      <div className="footer">
        <button onClick={() => navigate("/subscriptions")}>Mudar plano</button>
        <button className="cancel">Cancelar plano</button>
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
    margin-top: -99px;
  }
  .cancel {
    background-color: #FF4747;
  }
  .options {
    margin-top: -40px;
  }
`;
