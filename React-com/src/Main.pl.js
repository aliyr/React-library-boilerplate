import React , {Component} from 'react';
import styled from 'styled-components';

const Button = styled.a`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: auto;
  background: red;
  color: white;
  border: 2px solid white;

  /* The GitHub button is a primary button
   * edit this to target it specifically! */
  ${props => props.primary && css`
    background: white;
    color: palevioletred;
  `}
`


class ButtonPrimary extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <button>hello {this.props.text}!</button>
        )
    }
}

class Header extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <h1>hello {this.props.text}!</h1>
        )
    }
}

export {Button , ButtonPrimary , Header};