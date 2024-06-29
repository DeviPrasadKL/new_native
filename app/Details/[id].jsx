import { View, Text, StyleSheet, Image, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocalSearchParams } from 'expo-router';

export default function DetailsScreen() {

    const [movie, setMovie] = useState({});
    const { id } = useLocalSearchParams();

    useEffect(() => {
        axios.get("https://moviesapi-cm0p.onrender.com/movie/" + id)
            .then((res) => {
                console.log(res.data);
                setMovie(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <View >
            <View style={styles.container}>
                <Image
                    source={{ uri: `${movie.poster}` }}
                    style={styles.poster}
                />
                <Text style={styles.text}> Name -{movie.movieName}</Text>
                <Text style={styles.text}> Hero -{movie.hero}</Text>
                <Text style={styles.text}> Gener -{movie.gener}</Text>
                <Text style={styles.text}> Rating -{movie.rating}</Text>
            </View>

            <View style={styles.container1}>
                <Button title='Edit' />
                <Button title='Delete' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'satrt',
        gap: 4,
        height: '100%',
        width: '100%',
        overflow: 'scroll'
    },
    poster: {
        height: undefined,
        width: '90%',
        aspectRatio: 1,
        alignItems: 'stretch',
        borderRadius: 10
    },
    container1:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        gap:4,
    }
});