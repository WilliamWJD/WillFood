import React, {useState} from 'react'
import { View, Text, TouchableOpacity, Alert } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

import styles from './style'

const Header = () => {
    const [activeEntrega, setActiveEntrega]=useState(true)
    const [activeRetirada, setActiveRitirada]=useState(false)

    const onPressActive=(op)=>{
        if(op==='entrega'){
            setActiveEntrega(true)
            setActiveRitirada(false)
        }
        if(op==='retirada'){
            setActiveEntrega(false)
            setActiveRitirada(true)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.boxActions}>
                <TouchableOpacity style={activeEntrega ? styles.buttonActive: styles.buttonDefault} onPress={()=>onPressActive('entrega')}>
                    <Text style={activeEntrega ? styles.buttonActiveText : styles.buttonTextDefault}>Entrega</Text>
                </TouchableOpacity>
                <TouchableOpacity style={activeRetirada ? styles.buttonActive: styles.buttonDefault} onPress={()=>onPressActive('retirada')}>
                    <Text style={activeRetirada ? styles.buttonActiveText : styles.buttonTextDefault }>Retirada</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <Icon name='md-qr-scanner' size={30} style={styles.iconColor}/>
            </TouchableOpacity>
        </View>
    )
}

export default Header
