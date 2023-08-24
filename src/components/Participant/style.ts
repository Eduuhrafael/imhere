import { PermissionsAndroid, StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        width: '100%',
        backgroundColor: '#1F1E25',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },

    name: {
        flex: 1,
        fontSize: 16,
        marginLeft: 12,        
        color: '#fff'        
    },
 
    buttonText: {
        color: '#fff',
        fontSize: 34        
    },

    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#E23C44',
        alignItems: 'center',
        justifyContent: 'center'        
    },



});