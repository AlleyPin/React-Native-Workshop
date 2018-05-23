import React from 'react';
import { StyleSheet, Button, FlatList, TextInput, View } from 'react-native';
import Expo from 'expo';
import ListItem from './components/ListItem';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [{ key: 'item 1' }, { key: 'item 2' }],
      addItemTextInputValue: ''
    };
  }

  onAddItemTextChanged = value => {
    this.setState({
      addItemTextInputValue: value
    });
  };

  addItem = () => {
    if (!this.state.addItemTextInputValue) return;

    this.setState({
      items: [...this.state.items, { key: this.state.addItemTextInputValue }],
      addItemTextInputValue: ''
    });
  };

  deleteItem = key => {
    this.setState({
      items: this.state.items.filter(item => item.key !== key)
    });
  };

  renderItem = (element) => (
    <ListItem
      item={element.item}
      deleteItem={this.deleteItem}
    />
  );

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.items}
          renderItem={(element) => this.renderItem(element)}
        />
        <View style={styles.addItemContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Type item name here"
            value={this.state.addItemTextInputValue}
            onChangeText={this.onAddItemTextChanged}
          />
          <Button
            title="Add Item"
            color="#FDDA3B"
            onPress={this.addItem}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Expo.Constants.statusBarHeight
  },
  addItemContainer: {
    flexDirection: 'row',
    margin: 24
  },
  textInput: {
    flex: 1,
    marginRight: 12,
    fontSize: 16
  }
});
