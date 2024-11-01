import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const LogOutButton = () => {
  return (
    <TouchableOpacity>
      <Text style={styles.Text}>ログアウト</Text>
    </TouchableOpacity>
  )
}

export default LogOutButton

const styles = StyleSheet.create({
  Text: {
    fontSize: 12,
    lineHeight: 24,
    color: 'rgba(255,255,255,0.7)'
  }
})