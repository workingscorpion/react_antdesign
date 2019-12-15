import React, {Component, Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import {DatePicker} from 'antd';
import 'antd/dist/antd.css';

class App extends Component {
  state = {
    date: null
  };
  render() {
    const {date} = this.state;
    return (
      <div style={{width: 400, margin: '100px auto'}}>
        <DatePicker onChange={this.handleChange} />
        <div style={{marginTop: 20}}>
          Selected Date: {date ? date.format('YYYY-MM-DD') : 'None'}
        </div>
      </div>
    );
  }
}

export default App;
