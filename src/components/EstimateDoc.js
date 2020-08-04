import React from 'react';
import NumberFormat from 'react-number-format';
import logo from '../logo.svg';
import CrossIcon from '../assets/icons/CrossIcon';

const EstimateDoc = (props) => {
    const {id, status, approved, date, title, propertyName, streetAddress, cityStateZip, mgtCo, client, estimateNotes, scope, totalPrice } = props.selectedEstimate[0];
    const officeInfo = [
        {
            officeName: "",
            officeStreet: "",
            officeCityState: "",
            officePhone: "",
            officeEmail: ""
        }
    ]
    return (
        <div className="container">       
            <div className="col"  id="estimate">
                <div className="estimate-sv">
                    <div className="cross"> CLOSE <CrossIcon data-id={id} onClick={e => props.handleSelected(null, 'list')}/></div>
                
                    <div className="page-header">
                        <div className="estimate-info">
                            <div className="" id="id">{`ID: ${id}`}</div>
                            <div className="" id="status">{`Status: ${status}`}</div>
                            <div className="" id="approved">{`Approval: ${approved? "Complete" : "Pending" }`}</div>
                        </div>
                        <img src={logo} alt=""/>
                        <div className="company-office">
                            <p className="office-info">DFW Office</p>
                            <p className="office-info">1234 Example Ln.</p>
                            <p className="office-info">Dallas, TX 75237</p>
                            <p className="office-info">214-334-3567</p>
                            <p className="office-info">office@example.com</p>
                        </div>
                    </div>
                    <div className="document-body">
                        <div className="estimate-section-title">
                            <div className="client-info">
                                <div className="" id="propertyName">{`${propertyName}`}</div>
                                <div className="" id="streetAddress">{`${streetAddress}`}</div>
                                <div className="" id="cityStateZip">{`${cityStateZip}`}</div>
                                <div className="" id="mgtCo">{`${mgtCo}`}</div>
                                <div className="" id="client">{`${client}`}</div>
                            </div>

                            <div className="" id="date">{`DATE: ${date}`}</div>
                        </div>
                        <div className="" id="title">
                                <p className="title-label">TITLE</p>
                                <p className="title">{`${title}`}</p>
                        </div>
                        <div className="estimate-notes" id="estimateNotes">
                            <p className="note-label">NOTES</p>
                            <p className="note-box">{`${estimateNotes}`}</p>
                        </div>

                        <div className="estimate-scope" id="scope">
                            <div className="column-header">
                                <div className="description">Description</div>
                                <div className="column-price">Price</div>
                            </div>
                            <p className="scope">{`Scope ${scope}`}</p>
                        </div>
                        
                        <div className="estimate-price" id="totalPrice">
                            <p className="price-label">Total Contract Amount </p>
                            <p className="price"><NumberFormat value={totalPrice} displayType={'text'} thousandSeparator={true} prefix={'$'} /></p>
                        </div>
                    </div>
                    <div className="page-footer">
                        <p className="estimate-disclaimer">All material is guaranteed to be as specified.  All work is to be completed in a workmanlike manner according to standard practices.  Because there is no way of knowing in advance of underground conditions, any unforeseen work not expressly included above is excluded. All unpaid amounts shall bear interest at the maximum lawful rate from the due date until paid in full.  If it becomes necessary to employ an attorney to collect, or take legal action, for any amount that may become due hereunder, the attorney fees will be added to the contract amount.  It is understood that Norman Construction, Inc. is not responsible for any defects warranted by manufacturers of material used on the job. All warranties will be voided if payment in full for the agreed contract price is not paid. This contract is legally binding.</p>
                        <div className="info-boxes">
                            <span>
                                <div className="solid-box-frame">Representative</div>
                                <div className="box-frame">John Doe</div>
                            </span>
                            <span>
                                <div className="solid-box-frame">Title</div>
                                <div className="box-frame">Executive Account Manager</div>
                            </span>
                            <span>
                                <div className="solid-box-frame">Email</div>
                                <div className="box-frame">jd@example.com</div>
                            </span>
                            <span>
                                <div className="solid-box-frame">Estimator</div>
                                <div className="box-frame">Kevin Simpleton</div>
                            </span>
                            <span>
                                <div className="solid-box-frame">Client Signature</div>
                                <div className="box-frame"></div>
                            </span>
                            <span>
                                <div className="solid-box-frame">Date</div>
                                <div className="box-frame"></div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default EstimateDoc;