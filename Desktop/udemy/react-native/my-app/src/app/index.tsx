import { StyleSheet, Text, View } from "react-native";

// export default function Page() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.main}>
//         <Text style={styles.title}>Hello World</Text>
//         <Text style={styles.subtitle}>This is the first page of your app.</Text>
//       </View>
//     </View>
//   );
// }

const Index = (): JSX.Element => {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <View style={styles.headerInner}>
          <Text style={styles.headerTitle}>Memo App</Text>
          <Text style={styles.headerRight}>ログアウト</Text>
        </View>
      </View>

    <View>

      <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListTitle}>買い物リスト</Text>
            <Text tyle={styles.memoListDate}>2023年10月28日 10:00</Text>
          </View>
          <View>
            <Text>
              X
            </Text>
          </View>
      </View>

      <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListTitle}>買い物リスト</Text>
            <Text tyle={styles.memoListDate}>2023年10月28日 10:00</Text>
          </View>
          <View>
            <Text>
              X
            </Text>
          </View>
      </View>

      <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListTitle}>買い物リスト</Text>
            <Text tyle={styles.memoListDate}>2023年10月28日 10:00</Text>
          </View>
          <View>
            <Text>
              X
            </Text>
          </View>
      </View>


    </View>

      <View style={styles.circleButton}>
        <Text style={styles.circleButtonLabel}>+</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },

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
  },

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
  },

  circleButton: {
    backgroundColor: '#5C8DFF',
    height: 64,
    width: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: {width: 0, height: 8},
    elevation: 8,
  },

  circleButtonLabel: {
    color: 'white',
    fontSize: 40,
    lineHeight: 48
  }
})

export default Index