import { View, Text, StyleSheet } from 'react-native';

const Header = (): JSX.Element => {
  return (
    <View style={styles.header}>
    <View style={styles.headerInner}>
      <Text style={styles.headerTitle}>Memo App</Text>
      <Text style={styles.headerRight}>ログアウト</Text>
    </View>
  </View>
  )
}


const styles = StyleSheet.create({
  header: {
    backgroundColor: '#5C8DFF',
    height: 104,
    justifyContent: 'flex-end',
  },

  headerInner: {
    alignItems: 'center'
  },

  headerRight: {
    position: 'absolute',
    right: 16,
    bottom: 8,
    color: 'rgba(255, 255, 255, 0.7)'
  },

  headerTitle: {
    marginBottom: 8,
    fontSize: 22,
    lineHeight: 32,
    fontWeight: 'bold',
    color: 'white'
  }

})

export default Header


