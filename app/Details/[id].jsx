import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocalSearchParams } from 'expo-router';

export default function DetailsScreen() {

    const [movie, setMovie] = useState({});
    const { id } = useLocalSearchParams();

    useEffect(()=>{
        axios.get("https://moviesapi-cm0p.onrender.com/movie/" + id)
        .then((res)=>{
            console.log(res.data);
            setMovie(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

  return (
    <View style={styles.container}>
      <Text>Details</Text>
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
    }
});