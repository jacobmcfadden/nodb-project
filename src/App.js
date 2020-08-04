import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Header from './components/Header';
import Mainnav from './components/Mainnav';
import Estimate from './components/Estimate';


class App extends Component {
  constructor() {
    super(); 

    this.state = {
      estimates: [],
      filterPhrase: "",
      filteredEstimates: null,
      currentView: "list",
      selectedEstimate: []
    }
    this.getEstimates = this.getEstimates.bind(this);
    this.addEstimate = this.addEstimate.bind(this);
    this.deleteEstimate = this.deleteEstimate.bind(this);
  }

  componentDidMount(){
    this.getEstimates();
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.filterPhrase !== this.state.filterPhrase) {
      this.filterEstimates(this.state.filterPhrase);
    }
  }

  //-------Axios backend calls

  getEstimates = () => {
    axios.get('/api/estimates')
    .then(res => {
      this.setState({
        estimates: res.data
      })
    }).catch( err => console.log(err))
  }

  addEstimate = (e, body) => {
    e.preventDefault();
    const { date, title, propertyName, streetAddress, cityStateZip, mgtCo, client, estimateNotes, scope, totalPrice } = body;

    axios.post('./api/estimates', {date, title, propertyName, streetAddress, cityStateZip, mgtCo, client, estimateNotes, scope, totalPrice})
    .then( res => {
      this.setState({
        estimates: res.data,
        currentView: 'list'
      })
    })
    .catch( err => console.log(err))
  }

  deleteEstimate = (id) => {
    axios.delete(`./api/estimates/${id}`)
    .then(res => {
        this.setState({
            estimates: res.data,
            currentView: 'list'
        })
    }).catch( err => console.log(err))
  }

  approveEstimate = (e, id) => {
    e.preventDefault();
    axios.put(`./api/estimates/approve/${id}`)
    .then( res => {
      this.setState({
        estimates: res.data,
      
        currentView: 'view'
      })
    }).catch( err => console.log(err))
  }

  editEstimate = (e, body) => {
    e.preventDefault();
    console.log(body)
    const {id } = body;
    axios.put(`./api/estimates/edit/${id}`, {body})
    .then(res => {
        this.setState({
            estimates: res.data,
            currentView: 'list'
        })
    }).catch( err => console.log(err))
  }

  // App Calls

  setFilter = (event) => {
    this.setState({
      filterPhrase: event.target.value
    });
  }

  filterEstimates = (value) => {
    let filterResult = this.state.estimates.filter(elem => String(elem.title).includes(value));
    this.setState({
      filteredEstimates: filterResult
    });
  }

  handleSelected= (e, action) => {
    console.log(action)
    if(action === 'list') {
      this.setState({
        selectedEstimate: {},
        currentView: 'list'
      })
      console.log(this.state.selectedEstimate)
    } else if(action === 'new') {
      this.setState({
        selectedEstimate: {},
        currentView: 'new'
      })
      console.log(this.state.selectedEstimate)
    } else if (action === 'view') {
      const currentSelection = this.state.estimates.filter(elem => elem.id === +e.currentTarget.dataset.id)
      this.setState({
        selectedEstimate: currentSelection,
        currentView: 'view'
      })
      console.log(this.state.selectedEstimate)
    } else if (action === 'edit') {
      this.setState({
        currentView: 'edit'
      })
    } else {
      this.setState({
        currentView: 'delete'
      })
      console.log(this.state.selectedEstimate)
    }
  } 


  render() {
    return (
    <div className="App">
      <header className="fixed-top">
        <Mainnav/>
        <Header 
        filterPhrase={this.state.filterPhrase} 
        setFilter={this.setFilter} 
        currentView={this.state.currentView} 
        handleSelected={this.handleSelected}
        selectedEstimate={this.state.selectedEstimate}
        approveEstimate={this.approveEstimate}
        />
      </header>
      <main className="bg-light">
        <Estimate 
        estimates={!this.state.filteredEstimates ? this.state.estimates : this.state.filteredEstimates} 
        currentView={this.state.currentView} 
        selectedEstimate={this.state.selectedEstimate} 
        handleSelected={this.handleSelected}
        addEstimate={this.addEstimate}
        editEstimate={this.editEstimate}
        deleteEstimate={this.deleteEstimate}
        
        />
      </main>
    </div>
    );
  }
}

export default App;