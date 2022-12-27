import { FaWindowClose } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Modal({planName, planPrice, setModal}) {
    const navigate = useNavigate()

    return (
        <ConfirmWindow>
        <FaWindowClose color={"white"} size={32} onClick={() => setModal(false)} />
        <div className="modal">
          <h4>
            Tem certeza que deseja assinar o plano <br /> {planName} por R$
            {planPrice}?
          </h4>
          <div>
            <button className="butao" onClick={() => setModal(false)}>
              Não
            </button>
            <button onClick={() => navigate("/home")}>Sim</button>
          </div>
        </div>
      </ConfirmWindow>
    )
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
  .butao {
    background-color: #cecece;
  }
`;