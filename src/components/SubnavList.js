import React from 'react';

const SubnavList = (props) => {
    
    return (
        <nav className="navbar bg-secondary" id="mainNav">
            <div className="app-title">
                <a className="page-title" href="#dashboard">Search - List</a>
            </div>
            <div className="navbar-collapse ">
                <ul className="navbar-nav text-uppercase ml-auto">
                    <li className="nav-item mr-3" ><button onClick={e => props.handleSelected(null, 'new')}>Create New</button></li>
                    <li className="nav-item mr-3"><input className="estimateSearch" type="text" placeholder="Search estimate titles" value={props.filterPhrase} onChange={ e => props.setFilter(e)}/></li>
                </ul>
            </div>
        </nav>
    )
}

export default SubnavList;