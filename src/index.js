import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

import Header from './components/Header'
import SubHeader from './components/SubHeader'
import Promocoes from './components/Promocoes'
import Categorias from './components/Categorias'
import Tabs from './components/Tabs'

const App = () => {
    return (
        <View style={{flex:1, backgroundColor:'#fff'}}>
            <Header/>
            <ScrollView>
                <SubHeader/>
                <Promocoes/>
                <Categorias/>
            </ScrollView>
            <Tabs/>
        </View>
    )
}

export default App
