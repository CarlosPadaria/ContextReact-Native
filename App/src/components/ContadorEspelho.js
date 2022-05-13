import React,{useContext} from 'react';
import {
     View,
    Text,
    TouchableOpacity
} from 'react-native'
 import { ContadorContext } from '../context/ContadorContext';
const ContadorEspelho = () => {

    const {contador, acrescentaContador, mostrarMensagem} = useContext(ContadorContext)

    const handlePress = () => {
        acrescentaContador()
        mostrarMensagem("estou chamando o espelho")
    }

    return (
        <>
            <View>
                <Text>
                    {contador}
                </Text>
                 <TouchableOpacity onPress={handlePress}>
                    <Text>
                        cLICK
                    </Text>
                </TouchableOpacity>  
            </View>
        </>
    )
}

export default ContadorEspelho;