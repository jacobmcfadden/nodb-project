import React from 'react';
import NumberFormat from 'react-number-format';

const EstimateDoc = (props) => {
    const {id, status, date, title, propertyName, streetAdress, cityStateZip, mgtCo, client, estimateNotes, scope, totalPrice } = props.selectedEstimate[0];

    return (
        <div className="container">       
            <div data-id={id} className="col"  id="estimate">
                <div  data-id={id} className="estimate-sv" onClick={e => props.handleSelected(null, 'list')}>
                    <div data-id={id} className="estimate-caption">
                        <div className="" id="id">{`ID ${id}`}</div>
                        <div className="" id="status">{`Status ${status}`}</div>
                        <div className="" id="date">{`Date ${date}`}</div>
                        <div className="" id="title">{`Title ${title}`}</div>
                        <div className="" id="propertyName">{`Property Name ${propertyName}`}</div>
                        <div className="" id="streetAddress">{`Street Address ${streetAdress}`}</div>
                        <div className="" id="cityStateZip">{`City, State Zip ${cityStateZip}`}</div>
                        <div className="" id="mgtCo">{`Management Company ${mgtCo}`}</div>
                        <div className="" id="client">{`Client Name ${client}`}</div>
                        <div className="" id="estimateNotes">{`Notes ${estimateNotes}`}</div>
                        <div className="" id="scope">{`Scope ${scope}`}</div>
                        <div className="" id="totalPrice">Total Price: <NumberFormat value={totalPrice} displayType={'text'} thousandSeparator={true} prefix={'$'} /></div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default EstimateDoc;