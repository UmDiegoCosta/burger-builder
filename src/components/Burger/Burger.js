import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


const burger = (props) => {
  // transform an object of key/value pairs into array of burger ingredients
  let transformedIngredits = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient 
          key={igKey + i}
          type={igKey} />;
      });
    })
    //reduce transform array into something else
    .reduce((arr, el) => {
      return arr.concat(el)
    }, []);

  if ( transformedIngredits.length === 0 ) {
    transformedIngredits = <p>Please start adding ingredients</p>
  }
  return(
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredits}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;