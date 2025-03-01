import React, { useEffect, useState } from 'react'
import { ListItem } from '@react-native-material/core'
import { useNavigation } from '@react-navigation/native'
import { getAllMovies } from '../services/MovieStoreService'
import { Movie } from '../models/Movie'
import { ScrollView, StyleSheet, View } from 'react-native'
import { ScreenNavigationProp } from '../models/Routing'
import { AddMovieButton } from './AddMovieButton'

export const MovieList: React.FC = () => {
  const navigation = useNavigation<ScreenNavigationProp>()
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    getAllMovies().then(result => setMovies(result.movies))
  })

  return (
    <View style={styles.container}>
      <ScrollView>
        <AddMovieButton />
        {movies.map(movie => (
          <ListItem
            key={movie.id}
            title={movie.title}
            secondaryText={movie.overview}
            style={styles.row}
            onPress={() =>
              movie.id
                ? navigation.navigate('MovieDetails', { movieId: movie.id })
                : null
            }
          ></ListItem>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
  },
  row: {
    width: '90%',
    borderBottomWidth: 1,
    borderBottomColor: '#e6e6e6',
    alignSelf: 'center',
    flex: 1,
    height: 90,
    justifyContent: 'center',
  },
  movie: {
    paddingVertical: 20,
    width: '100%',
    fontSize: 16,
  },
})
