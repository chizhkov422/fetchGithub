import React, {useLayoutEffect, useState} from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';

import ListItem from '../../components/ListItem';

import styles from './styles';

const ITEMS_IN_PAGE = 50;

const MainScreen = ({navigation}) => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  useLayoutEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    if (loading) return;

    setLoading(true);

    try {
      const data = await fetch(
        `https://api.github.com/users?since=${
          page * ITEMS_IN_PAGE
        }&per_page=${ITEMS_IN_PAGE}`,
      );

      const newUsers = await data.json();

      if (newUsers?.length) {
        setUsers((users) => [...users, ...newUsers]);

        setPage((page) => page + 1);
      }
    } catch (err) {
      console.warn('fetchUsers', err);
    } finally {
      setLoading(false);
    }
  };

  if (!users.length) return null;

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <FlatList
          data={users}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <ListItem item={item} navigation={navigation} />
          )}
          refreshing={loading}
          onEndReached={fetchUsers}
          onEndThreshold={0}
          style={styles.flatListStyle}
        />
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;
