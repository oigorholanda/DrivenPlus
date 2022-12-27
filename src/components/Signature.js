import styled from "styled-components";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaMoneyBillWave } from "react-icons/fa";
import { TbClipboardList } from "react-icons/tb";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { base_url } from "../constants/urls";
import axios from "axios";
import AuthContext from "../contexts/AuthContext";
import Modal from "./Modal";

export default function Signature() {
  const [modal, setModal] = useState(false);
  const { idPlano } = useParams();
  const { token } = useContext(AuthContext);
  const [plan, setPlan] = useState([]);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    membershipId: idPlano,
    cardName: "",
    cardNumber: "",
    securityNumber: "",
    expirationDate: "",
  });
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    if (!token) {
      navigate("/");
      console.log("Deslogado (signature)");
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

  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function showModal(event) {
    event.preventDefault();
    setModal(true);
  }

  return (
    <ContainerSign>
      <Link to="/subscriptions">
        <IoMdArrowRoundBack color={"white"} size={35} />
      </Link>
      <img src={plan.image} alt="plan logo" />
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
        <input
          name="cardName"
          onChange={handleForm}
          type="text"
          placeholder="Nome impresso no cartão"
          value={form.cardName}
          required
        />
        <input
          name="cardNumber"
          onChange={handleForm}
          type="text"
          placeholder="Digitos do cartão"
          value={form.cardNumber}
          required
        />
        <div>
          <input
            name="securityNumber"
            onChange={handleForm}
            type="number"
            placeholder="Código de segurança"
            value={form.securityNumber}
            required
          />
          <input
            name="expirationDate"
            onChange={handleForm}
            type="text"
            placeholder="Validade"
            value={form.expirationDate}
            minLength="5"
            required
          />
        </div>
        <button type="submit">ASSINAR</button>
      </SignatureForm>
      {modal && (
        <Modal
          config={config}
          form={form}
          setModal={setModal}
          planName={plan.name}
          planPrice={plan.price && plan.price.replace(".", ",")}
        />
      )}
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
    margin: 0px auto 12px;
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
