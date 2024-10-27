import { View, Text, StyleSheet } from "react-native";

const MemoListItem = () => {
  return (
    <View style={styles.memoListItem}>
      <View>
        <Text style={styles.memoListTitle}>買い物リスト</Text>
        <Text tyle={styles.memoListDate}>2023年10月28日 10:00</Text>
      </View>
      <View>
        <Text>X</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.15)'
  },

  memoListTitle: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 'bold'
  },

  memoListDate: {
    fontSize: 10,
    lineHeight: 10,
    color: 'grey5'
  }
})

export default MemoListItem
