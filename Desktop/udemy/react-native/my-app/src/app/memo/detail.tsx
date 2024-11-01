import { View, Text, StyleSheet, ScrollView } from 'react-native';
// import { Feather } from '@expo/vector-icons';
import Icon from '../../components/Icon';
import { router } from 'expo-router';

import CircleButton from '../../components/CircleButton'

const handlePress = (): void => {
  router.push('memo/edit')
}

const Detail = (): JSX.Element => {
  return (
    <View style={styles.container}>

      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>買い物リスト</Text>
        <Text style={styles.memoDate}>2024年10月28日 10:00</Text>
      </View>
<ScrollView style={styles.memoBody}>
          <Text style={styles.memoBodyText}>
            買い物リスト
            書体やレイアウトなどを確認するために用います。
            本文用なので使い方を間違えると不自然に見えることもありますので要注意。
          </Text>
</ScrollView>
       <CircleButton onPress={handlePress} style={{ top: 60, bottom: 'auto' }}>
        {/* <Feather name='check' size={40}/> */}
        <Icon name="pencil" size={44} color="#ffffff" />
        </CircleButton>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },

  memoHeader: {
    backgroundColor: '#5C8DFF',
    height: 96,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19,
  },

  memoTitle: {
    color: 'white',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold'
  },

  memoDate: {
    color: 'white',
    fontSize: 12,
    lineHeight: 16,
  },

  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27
  },

  memoBodyText: {
    color: 'black',
    fontSize: 16,
    lineHeight: 24,
  }


})

export default Detail

