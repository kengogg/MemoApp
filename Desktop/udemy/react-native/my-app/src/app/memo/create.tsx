import { 
  StyleSheet, TextInput, View, KeyboardAvoidingView
 } from 'react-native'

import { router } from 'expo-router';

import CirclButton from '../../components/CircleButton'

import Icon from '../../components/Icon'

const handlePress = (): void => {
  router.back()
}


const Create = (): JSX.Element => {
  return (
    <KeyboardAvoidingView 
    behavior='height' 
    keyboardVerticalOffset={64} 
    style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput multiline style={styles.input} value=''/>
      </View>
      <CirclButton onPress={handlePress}>
        <Icon name='check' size={40} color='#ffffff' />
      </CirclButton>
    </KeyboardAvoidingView>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  inputContainer: {
    paddingVertical: 32,
    paddingHorizontal: 27,
    flex: 1
  },

  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24
  }
})

export default Create

