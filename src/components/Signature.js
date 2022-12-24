import styled from "styled-components";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaWindowClose } from "react-icons/fa";
import Logo from "../assets/Group 1.png";

export default function Signature() {
  return (
    <ContainerSign display={true}>
      <div>
        {" "}
        <IoMdArrowRoundBack
          color={"white"}
          size={35}
          onClick={() => console.log("clicado")}
        />
        <FaWindowClose
          color={"white"}
          size={32}
          onClick={() => console.log("clicado")}
        />
      </div>
      <img src={Logo} alt="" />
      <h3>Driven Plus</h3>
      <h4>Benefícios</h4>
      <p>1. Brindes Exclusivos</p>
      <p>2. Materiais bônus de web</p>
      {/* Map para cada um dos beneficios */}
      <h4>Preço</h4>
      <p>R$ 39,99 cobrados mensalmente</p>
      <SignaturaForm>
      <input type="text" placeholder="Nome impresso no cartão" />
      <input type="text" placeholder="Digitos do cartão" />
      <div>
        <input type="number" placeholder="Código de segurança" />
        <input type="text" placeholder="Validade" />
      </div>
      <button>ASSINAR</button>
      </SignaturaForm>

    </ContainerSign>
  );
}

const ContainerSign = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  padding: 25px;
  gap: 10px;

  div {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }
  react-icons {
    visibility: hidden;
  }
  img {
    margin: 30px auto 2px auto;
  }
  h3 {
    font-size: 32px;
    font-weight: 700;
    margin: auto;
  }
  h4 {
    font-size: 16px;
  }
  p {
    font-size: 14px;
  }
`;

const SignaturaForm = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    gap: 10px;
`
