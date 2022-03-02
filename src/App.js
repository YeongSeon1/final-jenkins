import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/book/Home";
import SaveForm from "./pages/book/SaveForm";
import Detail from "./pages/book/Detail";
import LoginForm from "./pages/user/LoginForm";
import JoinForm from "./pages/user/JoinForm";
import UpdateForm from "./pages/book/UpdateForm";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saveForm" element={<SaveForm />} />
        <Route path="/book/:id" element={<Detail />} />
        <Route path="/loginForm" element={<LoginForm />} />
        <Route path="/joinForm" element={<JoinForm />} />
        <Route path="/updateForm/:id" element={<UpdateForm />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
