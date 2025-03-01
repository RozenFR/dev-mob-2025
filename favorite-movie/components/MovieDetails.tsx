import React from 'react';
import {Box, VStack, Text, ListItem} from "@react-native-material/core";
import {Movie} from "../models/Movie";
import {FontAwesome} from "@expo/vector-icons";
import {ScrollView, StyleSheet, View} from "react-native";

type Props = {
    movie: Movie | undefined;
}

export const MovieDetails: React.FC<Props> = ({ movie }) => {

    const renderMovieDetails = () => {
        return movie ? (
            <VStack m={20} spacing={5}>
                <Box><Text variant="h5">{movie.title}</Text></Box>
                <Box><Text variant={"h6"}>{movie.release_date}</Text></Box>
                <Box mt={10}><Text variant={"subtitle2"} style={styles.centeredText}>Average vote : {movie.vote_average}</Text></Box>
                <Box mt={10} mb={30}><Text variant={"subtitle2"} style={styles.centeredText}>Number of vote : {movie.vote_count}</Text></Box>
                <Box><Text variant={"body1"}>{movie.overview}</Text></Box>
                <ListItem title={"Original Language"} secondaryText={movie.original_language}></ListItem>
                <ListItem title={"Original Title"} secondaryText={movie.original_title}></ListItem>
                <ListItem title={"For Adult"} trailing={ movie.adult ?(
                    <FontAwesome name={"check"} size={24} color={"black"}/>
                ) : (
                    <FontAwesome name={"close"} size={24} color={"black"} />
                )}></ListItem>
                <ListItem title={"Contain Video"} trailing={ movie.video ?(
                    <FontAwesome name={"check"} size={24} color={"black"}/>
                ) : (
                    <FontAwesome name={"close"} size={24} color={"black"} />
                )}></ListItem>
            </VStack>
        ) : (
            <View>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <ScrollView>
            { renderMovieDetails() }
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    centeredText: {
        textAlign: 'center'
    }
})