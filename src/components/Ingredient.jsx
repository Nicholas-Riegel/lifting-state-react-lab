function Ingredient({ingredient, removeFromBurger, addToBurger, parent}) {
  return (
    <li style={{backgroundColor: ingredient.color}}>
        {ingredient.name}
        {parent === 'IngredientList' 
            ? <button onClick={()=>addToBurger(ingredient)}>+</button>
            : <button onClick={()=>removeFromBurger(ingredient)}>x</button>
        }
    </li>
  )
}

export default Ingredient