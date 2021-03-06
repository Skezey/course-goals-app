import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    screen: {
      padding: 50
    },
    inputContainer: {
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      marginTop: 40
    },
    textInput: { 
      borderBottomColor: 'black', 
      borderBottomWidth: 1, 
      width: '75%' 
    },
    listItem: {
        padding: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1,
        marginVertical: 3
    }
  });

  export default styles;