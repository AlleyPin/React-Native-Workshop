import React from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import ListItem from './ListItem';

export default class App extends React.Component {

  renderItem = (element) => (
    <ListItem
      item={element.item}
    />
  );

  render() {
    return (
      <View style={styles.container} serviceType={'food'}>
        <View style={styles.header}></View>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <FlatList
          data={[{key: 'item 1'}, {key: 'item 2'}]}
          renderItem={(element) => this.renderItem(element)}
        >
        </FlatList>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    marginTop: 64
  },
  cell: {
    height: 100,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
