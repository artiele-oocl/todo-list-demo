import React, {Component} from 'react'
import 'antd/dist/antd.css';
import { Button, Input } from 'antd';

export default class TodoInput extends Component {
  state = {
    inputValue: ''
  };

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value});
  };

  dispatch = () => {
    this.props.onNewTodoAdded(this.state.inputValue);
    this.setState({inputValue: ''})
  };

  render() {
    return (
      <div className="todo-input" >
        <Input onChange={this.handleInputChange} value={this.state.inputValue} type="text" placeholder="What to do..." />
        <Button type="dashed" block onClick={this.dispatch}>Add</Button>
      </div>
    )
  }
}
