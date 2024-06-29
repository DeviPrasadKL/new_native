import { View, Text, StyleSheet, TextInput, Button, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useLocalSearchParams } from 'expo-router';

export default function Edit() {
    let [movieName, setMovieName] = useState("");
    let [hero, setHero] = useState("");
    let [gener, setGener] = useState("");
    let [rating, setRating] = useState("");
    let [poster, setPoster] = useState("");
    const { id } = useLocalSearchParams();

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = () => {
        axios.get("https://moviesapi-cm0p.onrender.com/movie/" + id)
            .then((res) => {
                setMovieName(res.data.movieName);
                setHero(res.data.hero);
                setGener(res.data.gener);
                setRating(res.data.rating);
                setPoster(res.data.poster);
                console.log("Data fetched", res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let data = {
            'movieName': movieName,
            'hero': hero,
            'gener': gener,
            'rating': rating,
            'poster': poster
        }
        axios.put("https://moviesapi-cm0p.onrender.com/add-movie", data)
            .then((res) => {
                console.log("Data saved");
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <View style={styles.container}>
            <Text>Edit Movie</Text>
            <form style={styles.form}>
                <TextInput style={styles.textbox} value={movieName} placeholder='Movie Name' onChangeText={nextValue => setMovieName(nextValue)} />
                <TextInput style={styles.textbox} value={hero} placeholder='Hero' onChangeText={nextValue => setHero(nextValue)} />
                <TextInput style={styles.textbox} value={gener} placeholder='Gener' onChangeText={nextValue => setGener(nextValue)} />
                <TextInput style={styles.textbox} value={poster} placeholder='Poster' onChangeText={nextValue => setPoster(nextValue)} />
                <TextInput style={styles.textbox} value={rating} placeholder='Rating' onChangeText={nextValue => setRating(nextValue)} />
                <Pressable style={styles.button} onPress={(e) => handleSubmit(e)}>
                    <Text style={styles.text}>Update</Text>
                </Pressable>
            </form>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
        height: '100%',
        width: '100%',
        overflow: 'scroll'
    },
    textbox: {
        padding: 2,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        backgroundColor: 'rgb(215 215 215)'
    },
    form: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 6,
        width: '100%',
        height: '100%'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
        paddingHorizontal: 32,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: 'black',
    },
    text: {
        fontSize: 13,
        lineHeight: 18,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});