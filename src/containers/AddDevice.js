import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addDevice} from '../redux/actions';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

class AddDevice extends Component {
  addDevice = (name, code) => {
    //redux store
    this.props.dispatch(addDevice(name, code));
    this.setState({name: ''});
    this.setState({code: ''});
  };

  render() {
    return (
      <View style={{flexDirection: 'row', marginHorizontal: 20}}>
        <TextInput
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          placeholder="Ex: Go to work"
          style={{
            color: 'aqua',
            borderWidth: 1,
            borderColor: 'aqua',
            backgroundColor: '#395A5A',
            height: 50,
            flex: 1,
            padding: 10,
          }}
        />
        <TouchableOpacity onPress={() => this.addTodo(this.state.text)}>
          <View
            style={{
              height: 50,
              backgroundColor: '#395A5A',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name="plus" size={54} color="#acee0f" />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
export default connect()(AddDevice);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
