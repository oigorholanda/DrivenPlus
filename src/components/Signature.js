import styled from "styled-components";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaWindowClose, FaMoneyBillWave } from "react-icons/fa";
import { TbClipboardList } from "react-icons/tb";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { base_url } from "../constants/urls";
import axios from "axios";
import AuthContext from "../contexts/AuthContext";

export default function Signature() {
  const [modal, setModal] = useState("hidden");
  const { idPlano } = useParams();
  const { token } = useContext(AuthContext);
  const [plan, setPlan] = useState([]);
  const navigate = useNavigate();
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    if (!token) {
      navigate("/");
      console.log("Deslogado");
    }
    axios
      .get(`${base_url}/subscriptions/memberships/${idPlano}`, config)
      .then((res) => {
        console.log(res.data);
        setPlan(res.data);
      })
      .catch((err) => {
        console.log("Algo deu errado");
        console.log(err.response.data);
      });
  }, []);

  function showModal(event) {
    event.preventDefault();
    setModal("visible");
  }

  function exitModal() {
    setModal("hidden");
  }

  return (
    <ContainerSign>
      <Link to="/subscriptions">
        <IoMdArrowRoundBack color={"white"} size={35} />
      </Link>
      <img src={plan.image} alt="image plan" />
      <h3>{plan.name}</h3>
      <h4>
        <TbClipboardList
          color={"#FF4791"}
          size={19}
          style={{ verticalAlign: "bottom" }}
        />
        Benefícios:
      </h4>
      {plan.perks &&
        plan.perks.map((perk, i) => (
          <p key={perk.id}>
            {i + 1}. {perk.title}
          </p>
        ))}

      <h4>
        <FaMoneyBillWave
          color={"#FF4791"}
          size={18}
          style={{ verticalAlign: "text-top" }}
        />{" "}
        Preço:
      </h4>
      <p>
        R$ {plan.price && plan.price.replace(".", ",")} cobrados mensalmente
      </p>
      <SignatureForm onSubmit={showModal}>
        <input type="text" placeholder="Nome impresso no cartão" />
        <input type="text" placeholder="Digitos do cartão" />
        <div>
          <input type="number" placeholder="Código de segurança" />
          <input type="text" placeholder="Validade" />
        </div>
        <button>ASSINAR</button>
      </SignatureForm>
      <ConfirmWindow display={modal}>
        <FaWindowClose color={"white"} size={32} onClick={() => exitModal()} />
        <div className="modal">
          <h4>
            Tem certeza que deseja assinar o plano <br /> {plan.name} por R$
            {plan.price && plan.price.replace(".", ",")}?
          </h4>
          <div>
            <button className="butao" onClick={() => exitModal()}>
              Não
            </button>
            <button onClick={() => navigate("/home")}>Sim</button>
          </div>
        </div>
      </ConfirmWindow>
    </ContainerSign>
  );
}

const ContainerSign = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  padding: 25px;
  gap: 8px;
  font-weight: 400;
  position: relative;
  div {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }
  img {
    margin: 0px auto 2px;
  }
  h3 {
    font-size: 32px;
    font-weight: 700;
    margin: 0px auto 15px;
  }
  h4 {
    font-size: 16px;
    margin-top: 5px;
  }
  p {
    font-size: 14px;
  }
`;

const SignatureForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  gap: 10px;
`;

const ConfirmWindow = styled.div`
  visibility: ${(props) => props.display};
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  background: rgba(0, 0, 0, 0.7);
  padding: 25px;
  flex-direction: column;
  align-items: flex-end;
  .modal {
    background-color: white;
    color: black;
    width: 248px;
    margin: 200px auto;
    flex-direction: column;
    padding: 20px;
    border-radius: 12px;
    font-weight: 700;
    font-size: 19px;
    text-align: center;
    gap: 20px;
  }
  .butao {
    background-color: #cecece;
  }
`;
