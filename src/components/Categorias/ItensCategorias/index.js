import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './style'

const ItensCategorias = ({item}) => {
    return (
            <View style={styles.boxCategoria}>
                <Image source={item.image} style={styles.imagemCategoria}/>
                <Text style={styles.textCategorias}>{item.description}</Text>
            </View>
    )
}

export default ItensCategorias
