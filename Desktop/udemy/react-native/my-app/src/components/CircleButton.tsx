import { View, Text, StyleSheet } from 'react-native';

interface Props {
  children: string
}


const CircleButton = (props: Props): JSX.Element => {
  const { children } = props;
  return (
  <View style={styles.circleButton}>
    <Text style={styles.circleButtonLabel}>{children}</Text>
  </View>
  )
}

const styles = StyleSheet.create({
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


export default CircleButton