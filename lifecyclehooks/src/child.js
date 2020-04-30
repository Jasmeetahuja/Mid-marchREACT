import React, { Component } from 'react';
import './App.css';

class Child extends Component {

  constructor(){
    super();
    this.state = {
      name: 'john'
    };
    console.log(' child constructor')
  }

  componentWillMount(){
    if(window.innerWidth < 700){
      this.setState({innerWidth: window.innerWidth})
    }
    console.log('child componentWillMount')
  }

  componentDidMount(){
    console.log('child componentDidMount')
  }

  componentWillReceiveProps(){
    console.log('child componentWillReceiveProps')
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('child shouldComponentUpdate')
    return true;
  }

  componentWillUpdate() {
      console.log('child componentWillUpdate')
  }

  componentWillUnmount() {
      console.log('child componentWillUnmount')
  }


  render(){
    console.log(' child render')
    return(
      <div><center>
       <h2> child name: {this.props.name}</h2>
        </center>
      </div>
    )
  }
}

export default Child;
