import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import GlobalStyles from "./components/GlobalStyles";
import Title from "./components/Title";
import HomeScreen from "./components/HomeScreen";
import SessionScreen from "./components/SessionScreen";
import SeatsScreen from "./components/SeatsScreen";
import SuccessScreen from "./components/SuccessScreen";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <GlobalStyles />
      <Title />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/sessoes/:idFilme" element={<SessionScreen />} />
        <Route path="/assentos/:idSessao" element={<SeatsScreen />} />
        <Route path="/sucesso" element={<SuccessScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
