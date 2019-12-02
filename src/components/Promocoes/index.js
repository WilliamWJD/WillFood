import React from 'react'
import { View, Text, ScrollView } from 'react-native'

import ItensPromocao from './ItensPromocoes'

import EntregaGratis from '../../assets/EntregaGratis.jpg'
import pizza from '../../assets/pizza.png'
import tudoPor5 from '../../assets/tudoPor5.png'

import styles from './style'

const Promocoes = () => {

    const listPromocoes=[
        {id:1, image:EntregaGratis},
        {id:2, image:pizza},
        {id:3, image:tudoPor5},
    ]

    return (
        <View style={styles.container}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {listPromocoes.map(item=>
                    <ItensPromocao key={item.id} item={item}/>
                )}
            </ScrollView>
        </View>
    )
}

export default Promocoes
