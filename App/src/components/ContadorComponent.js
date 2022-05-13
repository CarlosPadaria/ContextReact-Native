import React,{useContext} from 'react';
import {
     View,
    Text,
    TouchableOpacity
} from 'react-native'
 import { ContadorContext } from '../context/ContadorContext';
const ContadorComponent = () => {

     const {contador, acrescentaContador} = useContext(ContadorContext)
    return (
        <>
            <View>
                <Text>
                    {contador}
                </Text>
                 <TouchableOpacity onPress={acrescentaContador}>
                    <Text>
                        cLICK
                    </Text>
                </TouchableOpacity>  
            </View>
        </>
    )
}

export default ContadorComponent;