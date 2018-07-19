import React , {Component} from 'react';

class Dialog extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <h1>hello {this.props.text}!</h1>
        )
    }
}

class DialogPrimary extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <h1>hello {this.props.text}!</h1>
        )
    }
}

export {Dialog , DialogPrimary};