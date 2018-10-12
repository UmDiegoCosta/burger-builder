import React, { Component } from 'react';
import { connect } from 'react-redux';
 
import Auxiliar from '../Auxiliar/Auxiliar';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: false
  }

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false});
  }

  sideDrawerTogglerHandler = () => {
    this.setState((prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer};
    });
  }

  render () {
    return (
      <Auxiliar>
        <Toolbar 
          isAuth={this.props.isAuthtenticated}
          drawerToggleClicked={this.sideDrawerTogglerHandler} />
        <SideDrawer 
          isAuth={this.props.isAuthtenticated}
          closed={this.sideDrawerClosedHandler}
          open={this.state.showSideDrawer} />
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Auxiliar>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthtenticated: state.auth.token !== null
  };
};

export default connect(mapStateToProps)(Layout);