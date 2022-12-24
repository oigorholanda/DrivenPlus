import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Login from "./components/Login";
import Signature from "./components/Signature";
import SignUp from "./components/SignUp";
import Subscriptions from "./components/Subscriptions";

function App() {
  return (
    <ContainerApp>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/subscriptions/:idPlano" element={<Signature />} />
        <Route path="/home" element />
      </Routes>
    </BrowserRouter>
    </ContainerApp>
  );
}

export default App;

const ContainerApp = styled.div`
  max-width: 375px;
  min-height: 100vh;
  margin: auto;
  background-color: black;
`