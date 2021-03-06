import React from 'react';

import classes from './SideDrawer.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxiliar from '../../../hoc/Auxiliar/Auxiliar';

const sideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if ( props.open ) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }

  return (
    <Auxiliar>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems
            isAuthtenticated={props.isAuth}
            closeBackdrop={props.closed} />
        </nav>
      </div>`
    </Auxiliar>
  );
}

export default sideDrawer;