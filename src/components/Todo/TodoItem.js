import React, { Component } from 'react';
import './TodoItem.css';
import 'antd/dist/antd.css';
import { Checkbox } from 'antd';

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: this.props.todo.status,
    };
  }
  changeValue = (e) => {
    e && e.preventDefault();
    const { status } = this.state;
    const isCompleted = status === 'completed' ;
    this.props.onChange({...this.props.todo, status: isCompleted ? 'active': 'completed'});
    this.setState({status: isCompleted ? 'active': 'completed'})
  };

  render() {
    const { todo } = this.props;
    const isCompleted = this.state.status === 'completed' ;
    return (
      <div className="todo-item" onClick={this.changeValue}>
      <div>
        <Checkbox className="todo-checkbox" checked={isCompleted} onChange={this.changeValue}/>
      </div>
      <div className="content">
        <label className={this.state.status === 'completed' ? 'cross-line' : ''}>{todo.content}</label>
      </div>
    </div>
    )
  }
}
