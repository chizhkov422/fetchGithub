import React, {useLayoutEffect, useState} from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';

import ListItem from '../../components/ListItem';

import styles from './styles';

const ITEMS_IN_PAGE = 50;

const Followers = ({route, navigation}) => {
  const [followers, setFollowers] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  useLayoutEffect(() => {
    fetchFollowers();
  }, []);

  const fetchFollowers = async () => {
    if (loading) return;

    setLoading(true);

    try {
      const data = await fetch(
        `${route.params?.followersUrl}?since=${
          page * ITEMS_IN_PAGE
        }&per_page=${ITEMS_IN_PAGE}`,
      );

      const newFollowers = await data.json();

      setFollowers((followers) => [...followers, ...newFollowers]);

      setPage((page) => page + 1);
    } catch (err) {
      console.warn('fetchUsers', err);
    } finally {
      setLoading(false);
    }
  };

  if (!followers.length) return null;

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <FlatList
          data={followers}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <ListItem disabled item={item} />}
          refreshing={loading}
          onEndReached={fetchFollowers}
          onEndThreshold={0}
        />
      </View>
    </SafeAreaView>
  );
};

export default Followers;
