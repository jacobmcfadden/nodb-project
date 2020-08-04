import React from 'react';

import '../styling/Header.css';
import SubnavList from './SubnavList';
import SubnavView from './SubnavView';
import SubnavEdit from './SubnavEdit';
import SubnavDelete from './SubnavDelete';
import SubnavNew from './SubnavNew';

const Header = (props) => {
    const { filterPhrase, setFilter, currentView, estimates } = props;

    if(currentView === 'list') {
        return (
            <SubnavList filterPhrase={filterPhrase} setFilter={setFilter} currentView={currentView} handleSelected={props.handleSelected}/>
        )
    }else if(currentView === 'view') {
        return (
            <SubnavView filterPhrase={filterPhrase} setFilter={setFilter} currentView={currentView} selectedEstimate={props.selectedEstimate} handleSelected={props.handleSelected} />
        )
    } else if(currentView === 'edit'){
        return (
            <SubnavEdit filterPhrase={filterPhrase} setFilter={setFilter} currentView={currentView}/>
        )
    }else if (currentView === 'delete') {
        return (
            <SubnavDelete filterPhrase={filterPhrase} setFilter={setFilter} currentView={currentView}/>
        )
    } else {
        return (
            <SubnavNew filterPhrase={filterPhrase} setFilter={setFilter} currentView={currentView}/>
        )
    }
}

export default Header;