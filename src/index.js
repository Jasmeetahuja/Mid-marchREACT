import React, {Component} from "react";
import ReactDOM from "react-dom";

import Header from "./component/header";
import JSON from "./db.json"

//JSX

class App extends Component {

    constructor(){
        super()
        
        this.state={
            news: JSON
        }
    }

    render(){
        console.log(">>>>", this.state.news)
        return(
            <React.Fragment>
                <Header />
            <h1>Welcome to React</h1>
            <h3>This is react class</h3>
            </React.Fragment>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));