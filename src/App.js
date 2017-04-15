import React, { Component } from 'react';
import Expert from './Components/Expert.js';
import helper from './helper.js';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      expert: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

    handleChange = (event) => {
    let input = event.target.value;
    let lowercase = input.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    let data = this.state.filtered;
    let response = [];
    let i = 0;
    let len = data.length;
    // FILTER DATA
    while(i < len && data[i] !== input){
      if(data[i].first.indexOf(lowercase)>=0){
            response.push(data[i]);
      }else if(data[i].last.indexOf(lowercase)>=0){
          response.push(data[i]);
      }
      i++;
    }
      this.setState({expert:response});
}

  componentWillMount(){
    helper.getData().then((data)=>{
      this.setState({expert:data.data});
      this.setState({filtered:data.data});
    });
  }

  render() {
    return (
     <div className="App">
          <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 header-container">
                <h1>JS Experts</h1>
              </div>
              <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                <div className="col-lg-6 col-md-12 col-sm-12 offset-md-3 offset-lg-3 offset-sm-3 expert-addition">
                </div>
              </nav>
              <div className="col-lg-6 col-md-12 col-sm-12 offset-md-3 offset-lg-3 offset-sm-3 space-top">
                    <form>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Search expert by name" onChange={this.handleChange} />
                    </div>
                    </form>
                    <Expert expert={this.state.expert}/>
              </div>
              <footer className="footer">
                  <div className="container">
                    <span className="text-muted">Peter F. Tumulty 2017</span>
                  </div>
              </footer>
          </div>
      </div>
    );
  }
}

export default App;
