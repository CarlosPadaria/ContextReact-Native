import React, {createContext, useState} from 'react';

import {Alert} from 'react-native';

export const ContadorContext = createContext();

export const ContadorProvider = ({children}) => {
    const [contador, setContador] = useState(0);

    const mostrarMensagem = (mensagem) =>{
        Alert.alert(mensagem);
    }

    const acrescentaContador = () =>{
        setContador(contador + 1)
    }

    return (
        <ContadorContext.Provider value={{contador, acrescentaContador, mostrarMensagem}}>
            {children}
        </ContadorContext.Provider>
    )
}
