import React from 'react';
import {View, Text, Image, Pressable, Linking} from 'react-native';

import styles from './styles';

const ListItem = ({item, navigation, disabled}) => {
  const openFollowersList = () => {
    if (disabled) return;

    navigation.navigate('Followers', {
      followersUrl: item.followers_url,
    });
  };

  if (!item) return null;

  return (
    <Pressable onPress={openFollowersList} style={styles.itemContainer}>
      <Image style={styles.avatar} source={{uri: item.avatar_url}} />

      <View style={[styles.columnWrapper, styles.centerBlock]}>
        <Text>{item.login}</Text>
      </View>

      <View style={styles.columnWrapper}>
        <Text>{item.html_url}</Text>
      </View>
    </Pressable>
  );
};

export default ListItem;
