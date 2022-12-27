import axios from "axios";
import { useContext } from "react";
import { FaWindowClose } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { base_url } from "../constants/urls";
import UserContext from "../contexts/UserContext";

export default function Modal({
  form,
  config,
  planName,
  planPrice,
  setModal,
}) {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext)

    function signPlan () {
        console.log(form);
        axios.post(`${base_url}/subscriptions`, form, config)
        .then((res) => {
            console.log("Assinatura realizada", res.data)
            setUser({ ...user, membership:res.data})
            navigate("/home")
        })
        .catch((err) => {
            alert("Não foi possivel procesar o pedido, verifique seus dados e tente novamente")
            setModal(false)
            console.log(err.message);
        })
    }

  return (
    <ConfirmWindow>
      <FaWindowClose
        color={"white"}
        size={32}
        onClick={() => setModal(false)}
      />
      <div className="modal">
        <h4>
          Tem certeza que deseja assinar o plano <br /> {planName} por R$
          {planPrice}?
        </h4>
        <div>
          <button className="buton" onClick={() => setModal(false)}>
            Não
          </button>
          <button type="reset" onClick={signPlan}>Sim</button>
        </div>
      </div>
    </ConfirmWindow>
  );
}

const ConfirmWindow = styled.div`
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
    width: 260px;
    margin: 200px auto;
    flex-direction: column;
    padding: 20px;
    border-radius: 12px;
    font-weight: 700;
    font-size: 19px;
    text-align: center;
    gap: 20px;
  }
  .buton {
    background-color: #cecece;
  }
`;
