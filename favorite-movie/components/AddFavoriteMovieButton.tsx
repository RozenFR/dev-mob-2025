import React, { useState } from 'react'
import { addFavoriteMovie } from '../services/FavoriteMovieStoreService'
import { Pressable } from '@react-native-material/core'
import { FontAwesome } from '@expo/vector-icons'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { ScreenNavigationProp } from '../models/Routing'
import { Movie } from '../models/Movie'
import { getMovie } from '../services/MovieStoreService'

type Props = {
  movieId: number
}

export const AddFavoriteMovieButton: React.FC<Props> = ({ movieId }) => {
  const navigation = useNavigation<ScreenNavigationProp>()
  const [movie, setMovie] = useState<Movie | null>(null)

  useFocusEffect(() => {
    getMovie(movieId).then(res => (res ? setMovie(res) : null))
  })

  const addFavoriteMovieHandler = async () => {
    await addFavoriteMovie(movie!)
    if (navigation.canGoBack()) navigation.goBack()
  }

  return (
    <Pressable onPress={addFavoriteMovieHandler}>
      <FontAwesome name='heart-o' size={24} color='red' />
    </Pressable>
  )
}
