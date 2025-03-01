import React from 'react'
import { Pressable } from '@react-native-material/core'
import { ScreenNavigationProp } from '../models/Routing'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome } from '@expo/vector-icons'

export const FavoriteMovieButton: React.FC = () => {
  const navigation = useNavigation<ScreenNavigationProp>()

  return (
    <Pressable
      onPress={() => {
        navigation.navigate('FavoriteMovies')
      }}
    >
      <FontAwesome name='bookmark' size={24} color='black' />
    </Pressable>
  )
}
