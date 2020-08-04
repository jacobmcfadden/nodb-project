import React from 'react';

import '../styling/EstimateDoc.css';

const EstimateDelete = (props) => {
    const {id} = props.selectedEstimate[0];
return (
    <div className="container">
        <div className="col" id="estimate">
            <div data-id={id} className="estimate-sv">
                <div data-id={id} className="estimate-caption">
                    <p>Are you sure you want to permenantly delete this file?</p>
                    <div className="" id="id">Estimate ID: {id}</div>
                    <button onClick={() =>  props.deleteEstimate(id)}>Delete</button>
                    <button data-id={id} onClick={e => props.handleSelected(e, 'view')}>Cancel</button>
                </div>
            </div>
        </div>
    </div>
)
}

export default EstimateDelete;