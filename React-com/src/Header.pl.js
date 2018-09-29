import React , {Component} from 'react';

export class Header extends Component{

  constructor(props) {
      super(props);
  }

  render() {
      return(
          <h1>this is {this.props.text}!</h1>
      )
  }
}
