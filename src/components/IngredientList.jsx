import Ingredient from "./Ingredient";

const IngredientList = ({availableIngredients, addToBurger}) => {
    const parent = 'IngredientList'
    return <ul>
        {availableIngredients.map((ingredient, i)=>(
            <Ingredient key={i} {...{ingredient, parent, addToBurger}} />
        ))}
        </ul>;
  };
  
  export default IngredientList;
  