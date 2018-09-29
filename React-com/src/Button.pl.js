import React , {Component} from 'react';

export class Button extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <button>hello {this.props.text}!</button>
        )
    }
}