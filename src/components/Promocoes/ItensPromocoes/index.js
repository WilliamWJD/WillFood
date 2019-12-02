import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import styles from './style'

const ItensPromocao = ({item}) => {

    return (
        <View>
            <Image source={item.image} style={styles.imagensPromocao}/>
        </View>
    )
}

export default ItensPromocao
