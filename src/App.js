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
    this.editEstimate = this.editEstimate.bind(this);
    this.approveEstimate = this.approveEstimate.bind(this);
  }

  // Life Cycle Calls

  componentDidMount(){
    this.getEstimates()
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

  addEstimate = (body) => {
    const { date, title, propertyName, streetAddress, cityStateZip, mgtCo, client, estimateNotes, scope, totalPrice } = body;
    axios.post('/api/estimates', {date, title, propertyName, streetAddress, cityStateZip, mgtCo, client, estimateNotes, scope, totalPrice})
    .then( res => {
      this.setState({
        estimates: res.data,
        currentView: 'list'
      })
    }).catch( err => console.log(err))
  }

  deleteEstimate = (id) => {
    axios.delete(`/api/estimates/${id}`)
    .then(res => {
        this.setState({
            estimates: res.data,
            currentView: 'list'
        })
    }).catch( err => console.log(err))
  }

  approveEstimate = (id) => {
    axios.put(`/api/estimates/approve/${id}`)
    .then( res => {
      this.setState({
        estimates: res.data,
        currentView: 'view'
      })
      this.handleSelected(null, 'view');
    }).catch( err => console.log(err))
  }

  editEstimate = (id, body) => {
    axios.put(`/api/estimates/edit/${id}`, {body})
    .then( res => {
      this.setState({
        estimates: res.data,
        currentView: 'list'
      })
    }).catch( err => console.log(err))
  }

  // UI calls

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
    if(action === 'list') {
      this.setState({
        selectedEstimate: {},
        currentView: 'list'
      })
    } else if(action === 'new') {
      this.setState({
        selectedEstimate: {},
        currentView: 'new'
      })
    } else if (action === 'view') {
      if(e === null){
        const updatedSelection = this.state.estimates.filter(elem => elem.id === this.state.selectedEstimate[0].id)
        this.setState({
          selectedEstimate: updatedSelection,
          currentView: 'view'
        })
      } else {
        const currentSelection = this.state.estimates.filter(elem => elem.id === +e.currentTarget.dataset.id)
        this.setState({
          selectedEstimate: currentSelection,
          currentView: 'view'
        })
      }
    } else if (action === 'edit') {
      this.setState({
        currentView: 'edit'
      })
    } else {
      this.setState({
        currentView: 'delete'
      })
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
      <main className="display-content bg-light">
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