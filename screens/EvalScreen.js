import React from 'react';
import { ScrollView, StyleSheet, TextInput, Button } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class EvalScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  constructor(props) {
    super(props)
    this.state = {
      text: `
        console.log("some text");
        alert("some text");
      `
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>

        <TextInput
          multiline={true}
          numberOfLines={4}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />

        <Button
          onPress={() => this.runCode()}
          title="Run Code"
          color="#841584"
          accessibilityLabel="Run Code"
        />

      </ScrollView>
    );
  }

  runCode() {
    console.log('running code')
    console.log(this.state.text)
    console.log(eval(this.state.text))
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
