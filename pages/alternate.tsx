import Link from 'next/link'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  text: {
    alignItems: 'center',
    fontSize: 24,
    marginBottom: 24,
  },
  link: {
    color: 'blue',
  },
})

export default function Alternate() {
  return (
    <View style={styles.container}>
      <Text accessibilityRole="header" style={styles.text}>
        Alternate Page
      </Text>
      <Link href='/'>
      <Text style={styles.link} accessibilityRole="link">
        Go Back
      </Text>
      </Link>
    </View>
  )
}
