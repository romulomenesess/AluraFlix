import { BrowserRouter, Route, Routes } from "react-router-dom"
import Cadastro from "./Routes/Cadastro/cadastro"
import Padrao from "./Routes/Padrao/padrao"
import Cabecalho from "./Components/Cabecalho/cabecalho"
import Rodape from "./Components/Rodape/rodape"
import CadastrarProvider from "./Contextos/Cadastrar"

function AppRoutes () {
    return (
        <BrowserRouter>
            <Cabecalho />
            <CadastrarProvider>
                <Routes>
                    <Route path="/" element={<Padrao/>}></Route>
                    <Route path="/Cadastro" element={<Cadastro/>}></Route>
                </Routes>
            </CadastrarProvider>
            <Rodape/>
        </BrowserRouter>
    )
}

export default AppRoutes