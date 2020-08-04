import React from 'react';
import {ReactComponent as DocIcon} from '../assets/icons/docIcon.svg';
import NumberFormat from 'react-number-format';

const EstimateCard = (props) => {
    const {id, status, title, propertyName, mgtCo, client, totalPrice } = props.estimate
    return (
        <div className="col-lg-3 mb-4">
        <div data-id={id} className="estimate-item bg-dark m-4" onClick={e => props.handleSelected(e, 'view')}>
            <div className="estimate-link">
            <DocIcon className={`fill-${status}`}/>
            </div>
            <div data-id={id} className="estimate-caption">
                <div className="" id="id">ID: { id }</div>
                <div className="" id="title">{ title }</div>
                <div className="" id="property">{ propertyName }</div>
                <div className="" id="mgt-co">{ mgtCo }</div>
                <hr/>
                <p>Client: </p>
                <div className="" id="client">{ client }</div>
                <div className="" id="total-price">Total Price: <NumberFormat value={totalPrice} displayType={'text'} thousandSeparator={true} prefix={'$'} /></div>
            </div>
        </div>
    </div>
    )
}

export default EstimateCard;