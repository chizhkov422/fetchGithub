import React, {useLayoutEffect, useState} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';

import ListItem from '..//ListItem';

import styles from './styles';

const ITEMS_IN_PAGE = 100;

const DynamicFlatList = ({navigation, fetchUrl, itemsDisabled}) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  useLayoutEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    if (loading) return;

    setLoading(true);

    try {
      const res = await fetch(
        `${fetchUrl}?since=${page * ITEMS_IN_PAGE}&per_page=${ITEMS_IN_PAGE}`,
      );

      const newItems = await res.json();

      if (newItems?.length) {
        setData((data) => [...data, ...newItems]);

        setPage((page) => page + 1);
      }
    } catch (err) {
      console.warn('fetchData', err);
    } finally {
      setLoading(false);
    }
  };

  if (!data.length) return null;

  return (
    <>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <ListItem
            disabled={itemsDisabled}
            item={item}
            navigation={navigation}
          />
        )}
        refreshing={loading}
        onEndReached={fetchData}
        onEndThreshold={0}
        style={styles.flatListStyle}
      />

      {loading && (
        <View style={styles.loaderWrapper}>
          <ActivityIndicator size="large" />
        </View>
      )}
    </>
  );
};

export default DynamicFlatList;
