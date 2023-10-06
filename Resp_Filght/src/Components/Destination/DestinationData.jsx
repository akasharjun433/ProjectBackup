import React, { Component } from 'react'
import "./DestinationStyles.css"
class DestinationData extends Component {
    render() {
        return (
            <div className='first-des'>
                <div className='des-text'>
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                </div>
            </div>)
    }
}
export default DestinationData;

