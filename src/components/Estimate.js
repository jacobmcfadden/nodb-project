import React, { Component } from 'react';

import List from './List';
import EstimateDoc from './EstimateDoc';
import EstimateEdit from './EstimateEdit';
import EstimateDelete from './EstimateDelete';
import AddEstimate from './AddEstimate';
import '../styling/List.css'
class Estimate extends Component {
    constructor() {
        super();

        this.state = {
        date: "",
        title: "",
        propertyName: "",
        streetAddress: "",
        cityStateZip: "",
        mgtCo: "",
        client: "",
        estimateNotes: "",
        scope: "",
        totalPrice: 0
        }  
    }

    universalHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { estimates, currentView, selectedEstimate, handleSelected } = this.props;

        if(currentView === 'list') {
            return (
            <List estimates={estimates} handleSelected={handleSelected} />
            )
        }else if(currentView === 'new') {
            return (
            <AddEstimate handleSelected={handleSelected} addEstimate={this.props.addEstimate} />
            
            )
        } else if(currentView === 'edit'){
            return (
            <EstimateEdit selectedEstimate={selectedEstimate} handleSelected={handleSelected} editEstimate={this.props.editEstimate}/>
            )
        }else if (currentView === 'delete') {
            return (
            <EstimateDelete selectedEstimate={selectedEstimate} handleSelected={handleSelected} deleteEstimate={this.props.deleteEstimate}/>
            )
        } else {
            return (
            <EstimateDoc selectedEstimate={selectedEstimate} handleSelected={handleSelected}/>
            )
        }
    }
}

export default Estimate; 