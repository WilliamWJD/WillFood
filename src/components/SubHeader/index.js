import React from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

import styles from './styles'

const SubHeader = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.boxEndereco}>
                <Text style={styles.boxEnderecoText}>Rua denilson de Oliveira, 519 A</Text>
                <Icon name='md-arrow-dropdown' size={26} style={styles.boxEnderecoIcon}/>
            </TouchableOpacity>
            <View style={styles.boxSeach}>
                <Icon name='md-search' style={styles.boxSeachIcon} size={25}/>
                <TextInput placeholder='Prato ou restaurante' style={styles.boxSeachTextInput}/> 
            </View>
        </View>
    )
}

export default SubHeader
