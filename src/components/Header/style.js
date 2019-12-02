import {StyleSheet} from 'react-native'

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:6,
        height:60,
        borderWidth:2,
        borderColor:'#ecf0f1'
    },
    
    boxActions:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        height:60
    },

    buttonActive:{
        marginRight:20,
        height:60,
        justifyContent:'center',
        borderBottomWidth:2,
        borderColor:'red'
    }, 

    buttonActiveText:{
        fontSize:19,
        fontWeight:'bold',
        color:'red',
    },

    buttonDefault:{
        marginRight:20,
        height:60,
        justifyContent:'center',
    },

    buttonTextDefault:{
        fontSize:19,
        fontWeight:'bold',
        color:'#A6A6A6',
    },

    iconColor:{
        color:'red'
    }
})

export default styles