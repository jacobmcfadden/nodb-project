import React from 'react';

import List from './List';
import EstimateDoc from './EstimateDoc';
import EstimateEdit from './EstimateEdit';
import EstimateDelete from './EstimateDelete';
import AddEstimate from './AddEstimate';
import '../styling/List.css';

const Estimate = (props) => {

    const { estimates, currentView, selectedEstimate, handleSelected, editEstimate } = props;

    if(currentView === 'list') {
        return (
        <List estimates={estimates} handleSelected={handleSelected} />
        )
    }else if(currentView === 'new') {
        return (
        <AddEstimate handleSelected={handleSelected} addEstimate={props.addEstimate} />
        
        )
    } else if(currentView === 'edit'){
        return (
        <EstimateEdit selectedEstimate={selectedEstimate} handleSelected={handleSelected} editEstimate={editEstimate}/>
        )
    }else if (currentView === 'delete') {
        return (
        <EstimateDelete selectedEstimate={selectedEstimate} handleSelected={handleSelected} deleteEstimate={props.deleteEstimate}/>
        )
    } else {
        return (
        <EstimateDoc selectedEstimate={selectedEstimate} handleSelected={handleSelected} approveEstimate={props.approveEstimate}/>
        )
    }
}

export default Estimate; 