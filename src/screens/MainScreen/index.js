import React from 'react';
import {View, SafeAreaView} from 'react-native';

import DynamicFlatList from '../../components/DynamicFlatList';

import styles from './styles';

const GITHUB_URL = 'https://api.github.com/users';

const MainScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <DynamicFlatList navigation={navigation} fetchUrl={GITHUB_URL} />
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;
