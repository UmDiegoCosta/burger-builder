import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem
      closeBackdrop={props.closeBackdrop}
      link="/" exact>Burger Builder</NavigationItem>
    
    { props.isAuthtenticated
      ? <NavigationItem
          closeBackdrop={props.closeBackdrop}
          link="/orders">Orders</NavigationItem>
      : null
    }

    { !props.isAuthtenticated 
      ? <NavigationItem
          closeBackdrop={props.closeBackdrop}
          link="/auth">Authenticate</NavigationItem>
      : <NavigationItem link="/logout">Logout</NavigationItem>
    }
    
  </ul>
);

export default navigationItems;