import { BrowserRouter, Routes, Route } from "react-router-dom";
import Title from "./components/Title";
import GlobalStyles from "./components/GlobalStyles";
import Home from "./components/Home";
import Session from "./components/Session";
import Seats from "./components/Seats";
import SuccessScreen from "./components/SuccessSeats"

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Title />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sessoes/:idFilme" element={<Session />}/>
        <Route path="/assentos/:idSessao" element={<Seats />}/>
        <Route path="/sucesso" element={<SuccessScreen />}/>
      </Routes>
    </BrowserRouter>
  );
}


