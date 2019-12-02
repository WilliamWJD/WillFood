import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

import styles from './style'

const Tabs = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.boxMenu}>
                <Icon name='md-home' size={24} color='#57606f'/>
                <Text style={styles.boxMenuText}>Inicio</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.boxMenu}>
                <Icon name='md-search' size={24} color='#57606f'/>
                <Text style={styles.boxMenuText}>Busca</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.boxMenu}>
                <Icon name='md-paper' size={24} color='#57606f'/>
                <Text style={styles.boxMenuText}>Pedidos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.boxMenu}>
                <Icon name='md-person' size={24} color='#57606f'/>
                <Text style={styles.boxMenuText}>Perfil</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Tabs
