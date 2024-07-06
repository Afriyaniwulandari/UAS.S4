import React from 'react';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import {useRoute} from '@react-navigation/native';

const StoryDetail = () => {
  const route = useRoute();
  const {story} = route.params;

  let imageSource;
  switch (story.id) {
    case 1:
      imageSource = require('../images/gajah.jpg');
      break;
    case 2:
      imageSource = require('../images/kancil.jpg');
      break;
    case 3:
      imageSource = require('../images/singa.jpg');
      break;
    case 4:
      imageSource = require('../images/kelinci.jpg');
      break;
    case 5:
      imageSource = require('../images/tupai.jpeg');
      break;
    case 6:
      imageSource = require('../images/malin.jpg');
      break;
    case 7:
      imageSource = require('../images/sangkuriang.png');
      break;
    case 8:
      imageSource = require('../images/toba.jpg');
      break;
    case 9:
      imageSource = require('../images/jaka.jpg');
      break;
    case 10:
      imageSource = require('../images/timun.jpg');
      break;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{story.title}</Text>
      <Image source={imageSource} style={styles.image} />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.content}>{story.content}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dee3f1',
    padding: 16,
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    color: 'black',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  scrollViewContent: {
    paddingBottom: 16,
  },
  content: {
    fontSize: 20,
    textAlign: 'justify',
    color: 'black',
  },
});

export default StoryDetail;
