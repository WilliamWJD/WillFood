import React from 'react'
import { View, Text, ScrollView } from 'react-native'

import styles from './style'

import ItensCategorias from './ItensCategorias'

import acai from '../../assets/acai.jpg'
import doces from '../../assets/doces.jpg'
import salgados from '../../assets/salgados.jpg'
import sorvetes from '../../assets/sorvetes.jpg'
import lanches from '../../assets/lanches.jpg'

const categorias=[
    {id:1, description:'Açai', image:acai},
    {id:2, description:'Doces & Bolos', image:doces},
    {id:3, description:'Salgados', image:salgados},
    {id:4, description:'Sorvetes', image:sorvetes},
    {id:5, description:'Lanches', image:lanches}
]

const Categorias = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Categorias</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {categorias.map(item=>
                    <ItensCategorias item={item} key={item.id}/>
                )}
            </ScrollView>        
        </View>
    )
}

export default Categorias
