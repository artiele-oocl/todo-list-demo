import React, {Component} from 'react'
import 'antd/dist/antd.css';
import { Button, Input, Row, Col } from 'antd';

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
        
        <Row>
          <Col span={8}>
            <Button style={{borderColor: "#ffa940", color: "#ffa940"}}>Active</Button>
          </Col>
          <Col span={8}>
            <Button type="dashed" onClick={this.dispatch}>Add</Button>
          </Col>
          <Col span={8}>
            <Button type="primary">Completed</Button>
          </Col>
        </Row>

      </div>
    )
  }
}
