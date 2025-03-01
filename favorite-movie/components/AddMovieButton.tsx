import React from 'react'
import { ScreenNavigationProp } from '../models/Routing'
import { useNavigation } from '@react-navigation/native'
import { Pressable, Text } from '@react-native-material/core'
import { FontAwesome } from '@expo/vector-icons'
import { StyleSheet } from 'react-native'

export const AddMovieButton: React.FC = () => {
  const navigation = useNavigation<ScreenNavigationProp>()

  return (
    <Pressable
      style={styles.pressable}
      onPress={() => {
        navigation.navigate('NewMovie')
      }}
    >
      <FontAwesome name={'plus'} size={24} color={'white'} />
      <Text style={styles.text}>Add a new Movie to the list</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  pressable: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    padding: 10,
  },
  text: {
    color: 'white',
    marginLeft: 10,
  },
})
