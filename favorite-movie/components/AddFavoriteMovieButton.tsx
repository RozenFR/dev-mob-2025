import React from 'react';
import {addFavoriteMovie} from "../services/FavoriteMovieStoreService";
import {Pressable} from "@react-native-material/core";
import {FontAwesome} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import {ScreenNavigationProp} from "../models/Routing";

type Props = {
    movieId: number;
}

export const AddFavoriteMovieButton: React.FC<Props> = ({ movieId }) => {

    const navigation = useNavigation<ScreenNavigationProp>();

    const addFavoriteMovieHandler = async () => {
        await addFavoriteMovie(movieId);
        if (navigation.canGoBack())
            navigation.goBack();
    }

    return (
        <Pressable onPress={addFavoriteMovieHandler}>
            <FontAwesome name="heart-o" size={24} color="red"/>
        </Pressable>
    );
}