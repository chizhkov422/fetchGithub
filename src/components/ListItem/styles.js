import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  itemContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  avatar: {
    width: 100,
    height: 100,
  },

  columnWrapper: {
    flex: 0.5,
    alignItems: 'center',
  },

  centerBlock: {
    marginHorizontal: 10,
  },
});

export default styles;
