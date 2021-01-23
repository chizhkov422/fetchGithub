import React from 'react';
import {View, SafeAreaView} from 'react-native';

import DynamicFlatList from '../../components/DynamicFlatList';

import styles from './styles';

const Followers = ({route, navigation}) => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <DynamicFlatList
          navigation={navigation}
          fetchUrl={route.params?.followersUrl}
          itemsDisabled
        />
      </View>
    </SafeAreaView>
  );
};

export default Followers;
