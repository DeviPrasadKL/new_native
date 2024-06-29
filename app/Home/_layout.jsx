import React, { useEffect, useState } from 'react';
import { View, Text, Image, Button, StyleSheet, ScrollView, Linking } from 'react-native';
import axios from 'axios';
import { Link } from 'expo-router';

export default function Layout() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://moviesapi-cm0p.onrender.com/movies")
      .then((res) => {
        setData(res.data);
        console.log("Fetched");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <ScrollView>
      <View style={styles.button1}>
        <Link href='/Add'>
          <Button title='Add Movie'/>
        </Link>
      </View>

      {data.length > 0 &&
        data.map((el) => {
          return (
            <Link href={`/Details/${el._id}`} key={el._id} style={styles.container1}>
              <Image
                source={{ uri: `${el.poster}` }}
                style={styles.poster}
              />
              <Text style={styles.text}>{el.movieName}</Text>
            </Link>
          );
        })}
    </ScrollView>
  );
};

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
  container1: {
    display: 'flex',
    alignItems: 'center',
    flexDirection:'column',
    justifyContent: 'center',
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'grey',
    padding: 4,
  },
  text: {
    margin: 2,
  },
  poster: {
    height: undefined,
    width: '100%',
    aspectRatio: 1,
    alignItems: 'stretch',
    borderRadius: 10
  },
  button1: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 2,
    width: "100%"
  }
});
