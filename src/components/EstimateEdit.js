import React, { Component } from 'react';

class EstimateEdit extends Component {
    constructor(props){
        super(props);
        const { id, status, date, title, propertyName, streetAddress, cityStateZip, mgtCo, client, estimateNotes, scope, totalPrice } = props.selectedEstimate[0]
        this.state = {
            id: id,
            status: status,
            date: date,
            title: title,
            propertyName: propertyName,
            streetAddress: streetAddress,
            cityStateZip: cityStateZip,
            mgtCo: mgtCo,
            client: client,
            estimateNotes: estimateNotes,
            scope: scope,
            totalPrice: totalPrice
        }
    }
    componentDidUpdate(prevProps, prevState){
        if(prevProps.selectedEstimate !== this.props.selectedEstimate) {
          this.setState({
            id: this.props.selectedEstimate.id,
            status: this.props.selectedEstimate.status,
            date: this.props.selectedEstimate.date,
            title: this.props.selectedEstimate.title,
            propertyName: this.props.selectedEstimate.propertyName,
            streetAddress: this.props.selectedEstimate.streetAddress,
            cityStateZip: this.props.selectedEstimate.cityStateZip,
            mgtCo: this.props.selectedEstimate.mgtCo,
            client: this.props.selectedEstimate.client,
            estimateNotes: this.props.selectedEstimate.estimateNotes,
            totalPrice: this.props.selectedEstimate.totalPrice
          })
        }
          
      }
    universalHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        console.log(this.props.selectedEstimate)
        return (
            <div className="container">
                <div className="col" id="estimate">
                    <div data-id={this.state.id} className="estimate-sv">
                        <div data-id={this.state.id} className="estimate-caption">
                            <div className="" id="id">ID: { this.state.id }</div>
                            <div className="" id="status">Status: { this.state.status }</div>
                            <form action="submit" onSubmit={e => this.props.editEstimate(this.state.id)}>
                                <div className="" id="date"><input name="date" value={this.state.date} type="text" onChange={(e) => this.universalHandler(e)}/></div>
                                <div className="" id="title"><input name="title" value={this.state.title} type="text" onChange={(e) => this.universalHandler(e)}/></div>
                                <div className="" id="propertyName"><input name="propertyName" value={this.state.propertyName} type="text" onChange={(e) => this.universalHandler(e)}/></div>
                                <div className="" id="streetAddress"><input name="streetAddress" value={this.state.streetAddress} type="text" onChange={(e) => this.universalHandler(e)}/></div>
                                <div className="" id="cityStateZip"><input name="cityStateZip" value={this.state.cityStateZip} type="text" onChange={(e) => this.universalHandler(e)}/></div>
                                <div className="" id="mgtCo"><input name="mgtCo" value={this.state.mgtCo} type="text" onChange={(e) => this.universalHandler(e)}/></div>
                                <div className="" id="client"><input name="client" value={this.state.client} type="text" onChange={(e) => this.universalHandler(e)}/></div>
                                <div className="" id="estimateNotes">Notes<input name="estimateNotes" value={this.state.estimateNotes} type="text" onChange={(e) => this.universalHandler(e)}/></div>
                                <div className="" id="scope">Scope<input name="scope" value={this.state.scope} type="text" onChange={(e) => this.universalHandler(e)}/></div>
                                <div className="" id="totalPrice">Total Price<input name="totalPrice" value={this.state.totalPrice} type="text" onChange={(e) => this.universalHandler(e)}/></div>
                                <button action="submit">Update</button>
                                <button data-id={this.state.id} onClick={e => this.props.handleSelected(e, 'view')}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default EstimateEdit;