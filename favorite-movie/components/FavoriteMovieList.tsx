import React, { useEffect } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { ListItem } from '@react-native-material/core'
import { Movie } from '../models/Movie'
import { useNavigation } from '@react-navigation/native'
import { getAllFavoriteMovies } from '../services/FavoriteMovieStoreService'
import { ScreenNavigationProp } from '../models/Routing'

export const FavoriteMovieList = () => {
  const navigation = useNavigation<ScreenNavigationProp>()
  const [favoriteMovies, setFavoriteMovies] = React.useState<Movie[]>([])

  useEffect(() => {
    getAllFavoriteMovies().then(result => setFavoriteMovies(result.movies))
  })

  return (
    <View style={styles.container}>
      <ScrollView>
        {favoriteMovies.map(movie => (
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
