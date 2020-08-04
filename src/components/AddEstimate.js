import React, { Component } from 'react';


class AddEstimate extends Component {
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
       
            return (
                <div className="container">
                    <div className="col" id="estimate">
                        <div  data-id="add" className="estimate-sv">
                            <div className="estimate-caption">
                                <form action="submit" onSubmit={e => this.props.addEstimate(e, this.state)}>
                                    <div className="" id="date">Date<input name="date" value={this.state.date} type="text" onChange={(e) => this.universalHandler(e)}/></div>
                                    <div className="" id="title">Title<input name="title" value={this.state.title} type="text" onChange={(e) => this.universalHandler(e)}/></div>
                                    <div className="" id="propertyName">Property Name<input name="propertyName" value={this.state.propertyName} type="text" onChange={(e) => this.universalHandler(e)}/></div>
                                    <div className="" id="streetAddress">Street Address<input name="streetAddress" value={this.state.streetAddress} type="text" onChange={(e) => this.universalHandler(e)}/></div>
                                    <div className="" id="cityStateZip">City, State Zip<input name="cityStateZip" value={this.state.cityStateZip} type="text" onChange={(e) => this.universalHandler(e)}/></div>
                                    <div className="" id="mgtCo">Management Company<input name="mgtCo" value={this.state.mgtCo} type="text" onChange={(e) => this.universalHandler(e)}/></div>
                                    <div className="" id="client">Client Name<input name="client" value={this.state.client} type="text" onChange={(e) => this.universalHandler(e)}/></div>
                                    <div className="" id="estimateNotes">Notes<textarea name="estimateNotes" value={this.state.estimateNotes} type="text" onChange={(e) => this.universalHandler(e)}/></div>
                                    <div className="" id="scope">Scope<input name="scope" value={this.state.scope} type="text" onChange={(e) => this.universalHandler(e)}/></div>
                                    <div className="" id="totalPrice">Total Price<input name="totalPrice" value={this.state.totalPrice} type="text" onChange={(e) => this.universalHandler(e)}/></div>
                                    <button action="submit">Add Estimate</button>
                                    <button onClick={e => this.props.handleSelected(null, 'list')}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )

    }
}

export default AddEstimate; 