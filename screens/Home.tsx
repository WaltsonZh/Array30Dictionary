import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import THEME from '../assets/styles/theme'
import { useState } from 'react'
import * as Dictionary from '../assets/dictionary/Dictionary.json'
import * as Short from '../assets/dictionary/Short.json'
import * as Special from '../assets/dictionary/Special.json'

export default function Home() {
  const [query, setQuery] = useState<string>('')
  const [regular, setRegular] = useState<string>('')
  const [short, setShort] = useState<string>('')
  const [special, setSpecial] = useState<string>('')

  const submit = () => {
    if (query !== '') {
      console.log('\\u' + query.charCodeAt(0).toString(16))
      const regularIndex = Object.values(Dictionary['character']).findIndex((character) => character === query)
      setRegular(Dictionary['code'][regularIndex.toString() as keyof (typeof Dictionary)['code']])

      const shortIndex = Object.values(Short['character']).findIndex((character) => character === query)
      setShort(Short['code'][shortIndex.toString() as keyof (typeof Short)['code']])

      const SpecialIndex = Object.values(Special['character']).findIndex((character) => character === query)
      setSpecial(Special['code'][SpecialIndex.toString() as keyof (typeof Special)['code']])
    }
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={query} onChangeText={setQuery} placeholder='查碼' placeholderTextColor={THEME.LA} maxLength={1} />
      <TouchableOpacity style={styles.button} onPress={submit}>
        <Text style={styles.text}>查碼</Text>
      </TouchableOpacity>
      {regular ? <Text style={styles.text}>普：{regular}</Text> : null}
      {short ? <Text style={styles.text}>簡：{short}</Text> : null}
      {special ? <Text style={styles.text}>特：{special}</Text> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.BG,
    padding: 16,
    gap: 8,
  },
  input: {
    width: '100%',
    height: 48,
    borderWidth: 3,
    borderColor: THEME.TC,
    borderRadius: 10,
    fontSize: 24,
    paddingHorizontal: 16,
    color: THEME.TC,
  },
  text: {
    color: THEME.TC,
    fontSize: 20,
  },
  button: {
    backgroundColor: THEME.PD,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
})
