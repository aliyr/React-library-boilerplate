import React , {Component} from 'react';

class Button extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <button>hello {this.props.text}!</button>
        )
    }
}

class ButtonPrimary extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <button style="background-color:'red'">hello {this.props.text}!</button>
        )
    }
}

export {Button , ButtonPrimary};