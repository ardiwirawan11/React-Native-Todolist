import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Form, Item, Input, Label } from 'native-base';
import { connect } from 'react-redux';
import { addTodo } from '../redux/action/TodoAction';

class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ''
    };
  }

  componentDidMount(){
    console.log('props',this.props.addTodo)
  }

  addTodoItem = val => {
    this.setState({
      todos: val
    });
  };

  handleTodo = () => {
    this.props.AddTodo(this.state.todos);
    this.props.navigation.navigate('List');
  };

  render() {
    // console.log(this.props.addTodo)
    // const loopTodo = this.props.addTodo.map((val, index) => {
    //     return (
    //         <Text key={index}>{val.data}</Text>
    //     )
    // })

    return (
      <View>
        <Form>
          <Item>
            <Label>Todo</Label>
            <Input onChangeText={val => this.addTodoItem(val)} />
          </Item>
          <View>
            <TouchableOpacity onPress={() => this.handleTodo()}>
              <Text>Add</Text>
            </TouchableOpacity>
          </View>
        </Form>
        {/* {loopTodo} */}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  addTodo: state.addTodo
});

const mapDispatchToProps = dispatch => {
  return {
    AddTodo: todos => dispatch(addTodo(todos))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoInput);
