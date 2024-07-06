import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import stories from '../../data/stories';
import Foto from '../../images/db.jpg';

const StoryList = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {category} = route.params;

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('StoryDetail', {story: item})}>
      <Text style={styles.itemText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Cerita {category === 'dongeng' ? 'Dongeng' : 'Rakyat'}
      </Text>
      <FlatList
        data={stories[category]}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  item: {
    padding: 15,
    marginBottom: 10,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: '#345c78',
    backgroundColor: '#d598a3',
  },
  itemText: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
});

export default StoryList;
