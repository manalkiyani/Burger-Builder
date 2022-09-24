import React from "react";

import classes from './Burger.module.css';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
const burger =props =>
{
    let transformedIngredients = Object.keys(props.ingredients);
    //transform each ingredient into an array of as many elements as value for that ingredient in state

    transformedIngredients= transformedIngredients.map(igKey=>{
    return   [...Array(props.ingredients[igKey])].map( (_,i)=>{
    return    <BurgerIngredient key={igKey + i} type={igKey}/>
      }) 
   })
   transformedIngredients= transformedIngredients.reduce((prevArr,currArr)=>prevArr.concat(currArr) ,[])
  
   if (transformedIngredients.length === 0)
   {
    transformedIngredients = <p>Please start adding new ingredients</p>
   }
    
  
    return (
        <div className={classes.Burger}>

            <BurgerIngredient type='bread-top'/>
          {transformedIngredients}
            <BurgerIngredient type='bread-bottom'/>
        </div>
    );
}
export default burger;