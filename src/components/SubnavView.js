import React from 'react';

const SubnavView = (props) => {
    const { id } = props.selectedEstimate[0].id
    return (
        <nav className="navbar bg-secondary" id="mainNav">
            <div className="app-title">
                <a className="page-title" href="#dashboard">{`Estimate # ${id} Single View`}</a>
            </div>
            <div data-id={id} className="navbar-collapse ">
            <ul data-id={id} className="navbar-nav text-uppercase ml-auto">
                    <li className="nav-item" ><button data-id={id} onClick={e => props.handleSelected(e, 'edit')}>Edit</button></li>
                    <li className="nav-item"><button data-id={id} onClick={e => props.handleSelected(e, 'delete')}>Delete</button></li>
                </ul>
            </div>
        </nav>
    )
}

export default SubnavView;