import { View, Text, StyleSheet, TextInput, Button, Pressable } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';

export default function _layout() {

  let [movieName, setMovieName] = useState("");
  let [hero, setHero] = useState("");
  let [gener, setGener] = useState("");
  let [rating, setRating] = useState("");
  let [poster, setPoster] = useState("");

  const handleSubmit = (e) => {
    let data = {
      'movieName': movieName,
      'hero':hero,
      'gener':gener,
      'rating':rating,
      'poster':poster
    }
    axios.post("https://moviesapi-cm0p.onrender.com/add-movie", data)
    .then((res)=>{
      console.log("Data saved");
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  return (
    <View style={styles.container}>
      <Text>Add Movie</Text>
      <form style={styles.form}>
        <TextInput style={styles.textbox} placeholder='Movie Name' onChangeText={nextValue => setMovieName(nextValue)} />
        <TextInput style={styles.textbox} placeholder='Hero' onChangeText={nextValue => setHero(nextValue)} />
        <TextInput style={styles.textbox} placeholder='Gener' onChangeText={nextValue => setGener(nextValue)}/>
        <TextInput style={styles.textbox} placeholder='Poster' onChangeText={nextValue => setPoster(nextValue)} />
        <TextInput style={styles.textbox} placeholder='Rating' onChangeText={nextValue => setRating(nextValue)} />
        <Pressable style={styles.button} onPress={(e)=>handleSubmit(e)}>
          <Text style={styles.text}>Submit</Text>
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