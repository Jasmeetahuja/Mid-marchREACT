import React, { Component } from 'react';
import './App.css';
import Child from './child';

class App extends Component {

  constructor(){
    super();
    this.state = {
      name: 'john'
    };
    console.log('constructor')
  }

  componentWillMount(){
    if(window.innerWidth < 700){
      this.setState({innerWidth: window.innerWidth})
    }
    console.log('componentWillMount')
  }

  componentDidMount(){
    console.log('componentDidMount')
  }

  componentWillReceiveProps(){
    console.log('componentWillReceiveProps')
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('shouldComponentUpdate')
    return true;
  }

  componentWillUpdate() {
    console.log('componentWillUpdate')
}

componentWillUnmount() {
  console.log('componentWillUnmount')
}

  changeState(){
    this.setState({name:'jill'})
  }

  unmountChild(){
    this.setState({name:'jack'})
  }


  render(){
    console.log('render')
    if(this.state.name === 'abc'){
      return(<div/>);
    }
    return(
      <div><center>
        <h1>name: {this.state.name}</h1>
        innerwidth: {this.state.innerWidth}
        <Child name={this.state.name}/>
        <button onClick={this.changeState.bind(this)}>Change State</button>
        <button onClick={this.unmountChild.bind(this)}>Unmount Child</button>
        </center>
      </div>
    )
  }
}

export default App;
