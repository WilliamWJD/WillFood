import {StyleSheet} from 'react-native'

const styles=StyleSheet.create({
    container:{
        // backgroundColor:'red',
        height:100,
        paddingHorizontal:6,
        marginTop:14
    },

    boxEndereco:{
        flexDirection:'row',
        alignItems:'center'
    },

    boxEnderecoText:{
        fontSize:15,
        fontWeight:'bold',
        marginRight:5
    },

    boxEnderecoIcon:{
        color:'red'
    },

    boxSeach:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#F2F2F2',
        borderRadius:6,
        paddingHorizontal:15,
        marginTop:18
    },

    boxSeachIcon:{
        color:'red',
        marginRight:7
    },

    boxSeachTextInput:{
        flex:1,
    }
})

export default styles