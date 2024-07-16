import { createContext, useContext, useState } from "react";

export const CadastrarContext = createContext();
CadastrarContext.displayName = "Cadastrar";

export default function CadastrarProvider ({ children}) {
    const [ videoCadastrado, setVideoCadastrado] = useState([]);

    return (
        <CadastrarContext.Provider
        value={{videoCadastrado, setVideoCadastrado}}>
            {children}
        </CadastrarContext.Provider>
    )
}

export function useCadastrarContext(){
    const { videoCadastrado, setVideoCadastrado } = useContext(CadastrarContext);
    
    function cadastrarVideo(novoVideo) {
        
        let novaLista = [...videoCadastrado];
        
        if (novoVideo) {
            novaLista.push(novoVideo);
            return setVideoCadastrado(novaLista);
        }
    }
    return {
        videoCadastrado,
        cadastrarVideo
    }
}