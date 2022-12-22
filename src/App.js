import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <ContainerApp>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/subscriptions" element />
        <Route path="/subscription/:idPlano" element />
        <Route path="/home" element />
      </Routes>
    </BrowserRouter>
    </ContainerApp>
  );
}

export default App;

const ContainerApp = styled.div`
  max-width: 375px;
  height: 100vh;
  margin: auto;
  background-color: black;
`