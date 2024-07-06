import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../images/paper.jpg')} />
      <Text style={styles.title}>Kumpulan Dongeng Pilihan</Text>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('StoryList', {category: 'dongeng'})
          }>
          <View style={styles.categoryContainer}>
            <Image
              style={styles.categoryImage}
              source={require('../images/db.jpg')}
            />
            <Text style={styles.boxText}>Dongeng Binatang</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('StoryList', {category: 'rakyat'})
          }>
          <View style={styles.categoryContainer}>
            <Image
              style={styles.categoryImage}
              source={require('../images/rakyat.webp')}
            />
            <Text style={styles.boxText}>Cerita Rakyat</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 26,
    marginBottom: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  categoryContainer: {
    alignItems: 'center',
  },
  categoryImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 20,
  },
  boxText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
});

export default HomeScreen;
