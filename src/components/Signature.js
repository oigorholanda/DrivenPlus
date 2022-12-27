import styled from "styled-components";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaWindowClose, FaMoneyBillWave } from "react-icons/fa";
import { TbClipboardList } from "react-icons/tb";
import Logo from "../assets/Group 1.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Signature() {
  const [modal, setModal] = useState("hidden");
  const navigate = useNavigate()

  function showModal(event) {
    event.preventDefault();
    setModal("visible");
  }

  function exitModal() {
    setModal("hidden");
  }

  return (
    <ContainerSign>
      <Link to="/">
        <IoMdArrowRoundBack
          color={"white"}
          size={35}
          onClick={() => console.log("clicado")}
        />
      </Link>
      <img src={Logo} alt="" />
      <h3>Driven Plus</h3>
      <h4>
        <TbClipboardList
          color={"#FF4791"}
          size={19}
          style={{ verticalAlign: "bottom" }}
        />
        Benefícios
      </h4>
      <p>1. Brindes Exclusivos</p>
      <p>2. Materiais bônus de web</p>
      {/* Map para cada um dos beneficios */}
      <h4>
        <FaMoneyBillWave
          color={"#FF4791"}
          size={18}
          style={{ verticalAlign: "text-top" }}
        /> Preço
      </h4>
      <p>R$ 39,99 cobrados mensalmente</p>
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
            Tem certeza que deseja assinar o plano <br /> Driven Plus (R$
            39,99)?
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
  gap: 10px;
  font-weight: 400;
  position: relative;
  div {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }
  img {
    margin: 15px auto 2px;
  }
  h3 {
    font-size: 32px;
    font-weight: 700;
    margin: 0px auto 15px;
  }
  h4 {
    font-size: 16px;
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
