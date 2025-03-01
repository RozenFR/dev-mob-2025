import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {HomeScreen} from "./screens/HomeScreen";
import {RootStackParamList} from "./models/Routing";
import {FavoriteMovieButton} from "./components/FavoriteMovieButton";
import {FavoriteMoviesScreen} from "./screens/FavoriteMoviesScreen";
import {MovieDetailsScreen} from "./screens/MovieDetailsScreen";

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {

    const renderFavoriteMovieButton = () => {
        return <FavoriteMovieButton/>;
    }

    return (
        <NavigationContainer>
            <StatusBar style="auto"/>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={() => {
                        return {
                            headerTitle: 'All Movies',
                            headerRight: () => renderFavoriteMovieButton()
                        }
                    }}
                />
                <Stack.Screen name="FavoriteMovies" component={FavoriteMoviesScreen}/>
                <Stack.Screen name="MovieDetails" component={MovieDetailsScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
