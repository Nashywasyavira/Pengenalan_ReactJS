import React, {Component} from 'react';

class Alert extends Component {
    render(){
        return (
            <div className="alert alert-success"> 
                <h4>{this.props.header}</h4>
                {this.props.children}
            </div>
        );
    }
}

export default Alert;