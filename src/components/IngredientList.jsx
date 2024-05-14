const IngredientList = ({availableIngredients, addToBurger}) => {
    return <ul>
        {availableIngredients.map((ingredient, i)=>(
            <li key={i} style={{backgroundColor: ingredient.color}}>
                {ingredient.name}
                <button onClick={()=>addToBurger(ingredient)}>+</button>
            </li>
        ))}
        </ul>;
  };
  
  export default IngredientList;
  