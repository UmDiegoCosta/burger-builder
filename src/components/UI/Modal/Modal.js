import React, { Component } from 'react';

import classes from './Modal.css';
import Auxiliar from '../../../hoc/Auxiliar/Auxiliar';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

  // only update the Modal and OrderSummary if Modal is open
  shouldComponentUpdate (nextProps, nextState) {
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
  }

  render () {
    return (
      <Auxiliar>
        <Backdrop 
          show={this.props.show}
          clicked={this.props.modalClosed} />
        <div 
          className={classes.Modal}
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translatey(-100vh)',
            opacity: this.props.show ? '1' : '0'
          }}>
          {this.props.children}
        </div>
      </Auxiliar>
    );
  }
}

export default Modal;