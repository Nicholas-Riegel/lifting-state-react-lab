import Ingredient from "./Ingredient";

const BurgerStack = ({stack, removeFromBurger}) => {
    const parent = 'BurgerStack'
    return <ul>
        {stack.length > 0
            ? stack.map((ingredient, i)=>(
                    <Ingredient key={i} {...{ingredient, parent, removeFromBurger}} />
                ))
            : <li>No Ingredients</li>
        }
            
    </ul>;
};
  
export default BurgerStack;
  