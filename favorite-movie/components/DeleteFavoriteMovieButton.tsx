import React from 'react';
import {deleteFavoriteMovie} from "../services/FavoriteMovieStoreService";
import {Pressable} from "@react-native-material/core";
import {FontAwesome} from "@expo/vector-icons";
import {ScreenNavigationProp} from "../models/Routing";
import {useNavigation} from "@react-navigation/native";

type Props = {
    movieId: number;
}

export const DeleteFavoriteMovieButton: React.FC<Props> = ({ movieId }) => {
    const navigation = useNavigation<ScreenNavigationProp>();

    const removeFavoriteMovieHandler = async () => {
        await deleteFavoriteMovie(movieId);
        if (navigation.canGoBack())
            navigation.goBack();
    }

    return (
        <Pressable onPress={removeFavoriteMovieHandler}>
            <FontAwesome name="heart" size={24} color="red"/>
        </Pressable>
    );
}