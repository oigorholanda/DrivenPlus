import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Home from "./components/Home";
import Login from "./components/Login";
import Signature from "./components/Signature";
import SignUp from "./components/SignUp";
import Subscriptions from "./components/Subscriptions";
import AuthContext from "./contexts/AuthContext";
import UserContext from "./contexts/UserContext";

function App() {
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <UserContext.Provider value={{ user, setUser }}>
        <ContainerApp>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/subscriptions" element={<Subscriptions />} />
              <Route path="/subscriptions/:idPlano" element={<Signature />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </ContainerApp>
      </UserContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;

const ContainerApp = styled.div`
  max-width: 390px;
  min-height: 100vh;
  margin: auto;
  background-color: black;
`;
