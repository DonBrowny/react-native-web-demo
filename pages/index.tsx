import Link from 'next/link'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  link: {
    color: 'blue',
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
  text: {
    alignItems: 'center',
    fontSize: 24,
    marginBottom: 24,
  },
})

export default function IndexPage() {
  return (
    <View style={styles.container}>
      <Text accessibilityRole="header" style={styles.text}>
        React Native for Web & Next.js
      </Text>
      <Link href='/alternate'>
      <Text style={styles.link} accessibilityRole="link">
        A universal link
      </Text>
      </Link>

      <View style={styles.textContainer}>
        <Text accessibilityRole="header" aria-level="2" style={styles.text}>
          Subheader
        </Text>
      </View>
    </View>
  )
}
