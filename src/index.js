import React, {Component} from "react";
import ReactDOM from "react-dom";

import Header from "./component/header";
import JSON from "./db.json";
import NewsList from "./component/news_list"

//JSX

class App extends Component {

    constructor(){
        super()
        
        this.state={
            news: JSON,
            filtered: JSON
        }
    }

    filterNews(keyword) {
        let output = this.state.news.filter((item) => {
            return item.title.toLowerCase().indexOf(keyword.toLowerCase()) > -1
        })

        this.setState({filtered : output})
    }

    render(){
        console.log(">>>>", this.state.news)
        return(
            <React.Fragment>
                <Header  userInput={(uinput) => this.filterNews(uinput)}/>
                <NewsList newsdata={this.state.filtered} />
            </React.Fragment>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));